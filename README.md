# Yarno Marketing Website

Live website: https://www.yarno.com.au

This is a Prismic-backed GatsbyJS website (https://yarno.prismic.io/)

## Contributing

When contibuting, please update the changelog. See: https://keepachangelog.com

## Setting up

### Required dependencies

- Homebrew: https://brew.sh/
- Direnv: https://direnv.net/ - `brew install direnv`

### Once-off setup

With the required dependencies installed, you'll want to populate a `.envrc`
file with the following (values pulled from 1Password):

```
export NPM_TOKEN=""
export PRISMIC_REPO_NAME=""
export PRISMIC_API_KEY=""
export PRISMIC_CUSTOM_TYPES_API_KEY=""
```

### Running development mode

To run the site in develop, run:

```
npm run dev
```

Storybook can be run with:

```
npm run storybook
```

### Development flow

Pull requests opened against the main branch will have a deploy preview created
automatically by Gatsby Cloud. Therefore, just open up everything up against
main and ensure that when you merge in you include a changelog entry with a
version number:

```
VERSION="1.2.3" make set_version
```
