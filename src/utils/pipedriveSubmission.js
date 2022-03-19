import fetch from "node-fetch"

const MARKS_PIPEDRIVE_USER_ID = 11404673
const BASE_URL = "https://yarno.pipedrive.com/v1"
const API_KEY_PARAMETER = `api_token=${process.env.PIPEDRIVE_API_KEY}`

const createPerson = body => {
  const data = {
    name: body.name,
    owner_id: MARKS_PIPEDRIVE_USER_ID,
    email: body.email,
    phone: body.phone
  }
  const url = `${BASE_URL}/persons?${API_KEY_PARAMETER}`
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

const createDeal = (body, personId) => {
  const dealTitle =
    body.stageID == 19
      ? `Contact submission from ${body.name}`
      : `Demo request from ${body.name}`
  const data = {
    title: dealTitle,
    user_id: MARKS_PIPEDRIVE_USER_ID,
    person_id: personId,
    stage_id: body.stageID
  }
  const url = `${BASE_URL}/deals?${API_KEY_PARAMETER}`
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

const createNote = (body, personId, dealId) => {
  const data = {
    content: `Submitted form at ${body.source}. <br />${body.message}`,
    user_id: MARKS_PIPEDRIVE_USER_ID,
    deal_id: dealId,
    person_id: personId
  }
  const url = `${BASE_URL}/notes?${API_KEY_PARAMETER}`
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

const pipedriveSubmission = body => {
  if (!body.stageID) {
    return false
  }

  createPerson(body)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const personId = data.data.id
        console.log(`Person ID: ${personId}`)
        createDeal(body, personId)
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              console.log(data)
              const dealId = data.data.id
              console.log(`Deal ID: ${dealId}`)
              createNote(body, personId, dealId)
                .then(response => response.json())
                .then(data => {
                  if (data.success) {
                    return true
                  } else {
                    return false
                  }
                })
                .catch(error => {
                  console.log(error)
                  return false
                })
            }
          })
          .catch(error => {
            console.log(error)
            return false
          })
      } else {
        return false
      }
    })
    .catch(error => {
      console.log(error)
      return false
    })
  return true
}

export default pipedriveSubmission
