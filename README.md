# BE
Staging deployed app: 
`https://wunderlist5staging.herokuapp.com/`

## API Routes

**Login route. POST request**
- https://wunderlist5production.herokuapp.com/api/login

### Login User
Both username and password is required. A successful login returns a token. Token expires after one day. After one day, user will have to login again.

### Register User
**Register user route. POST request**
- https://wunderlist5production.herokuapp.com/api/register

**__Example:__**
```javascript
{
   "username": "frodo",
   "password": "ring"
}
```

**GET request to get user by id**
https://wunderlist5production.herokuapp.com/api/users/:id

**__Example:__**
```javascript
[
    {
        "id": 1,
        "username": "frodo"
    }
]
```
**DELETE request to delete user by id**
https://wunderlist5production.herokuapp.com/api/users/:id

## Database Schema
### Users
- id
- username (Required)
- password (Required)