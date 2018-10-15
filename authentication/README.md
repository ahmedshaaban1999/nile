# Authentication Service
This service is responsible for authenticating every user. Since this service will be hidden behind the API gateway, all the json web tokens (jwt) will be sent in the body of POST requests.

# Authentication Scenario
The gateway will handle token validation, while the authentication service will handle registering users, issuing tokens and saving/deleting/updating users.