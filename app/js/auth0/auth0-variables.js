function getAuth0ClientId() {
  if (__PROD__) {
    return 'ZJAMnydEkTfKmOrcH6ogSX1qEqSvF3Z4'
  } else {
    return '32BARvuzoMtbvsTUYcgwwqwKX0EZZgc8'
  }
}

const variables = {
  AUTH0_CLIENT_ID: getAuth0ClientId(),
  AUTH0_DOMAIN: 'empiri.auth0.com',
  AUTH0_CALLBACK_URL: location.href,
}

export default variables
