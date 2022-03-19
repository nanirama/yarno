import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Autosuggest from 'react-autosuggest';

const SupportArticleSearch = () => {
  const { AllArticles, AllCategproes } = useStaticQuery(
    graphql`
      query {
        AllArticles : allPrismicSupportArticle {
          edges {
            node {
              id
              uid
              data {
                title {
                  text
                }
              }
            }
          }
        }
        AllCategproes : allPrismicSupportCategory {
          edges {
            node {
              uid
              data {
                articles {
                  article {
                    document {
                      ... on PrismicSupportArticle {
                        id
                        uid
                        data {
                          title {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const articles = []
  AllCategproes.edges.map(({node})=>{
      let cat_uid = node.uid;
      let articles_data = node.data.articles
      articles_data.length>0 && articles_data.map(({article})=>{
        if(article && article.document && article.document.uid){
          articles.push({ 'name':article.document.data.title.text, 'link':article.document.uid, 'clink':node.uid})
        }        
      })
  })
  const [ value, setValue ] = useState('')
  const [ suggestions, setSuggestions ] = useState('')

  // Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return articles.filter(item =>{
    if (item.name.toLowerCase().includes(inputValue)) {
      return item;
    }
  }
    
  );
};

const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div onClick={e =>  window.location.href=`/support/category/${suggestion.clink}/${suggestion.link}/`}>
    {suggestion.name}
  </div>
);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  };

 
    const inputProps = {
      placeholder: 'What do you need help with?',
      value,
      onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
}

export default SupportArticleSearch