const router = require('express').Router();
const Users = require('./user-model.js');

// User can log in and can create, review, update, and delete data on their own todo list.

// Get all users.
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json('Problems getting users.', err);
   })
});

// Get user by id.
router.get('/:id', validateUser, (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: "The user with the specified id does not exist." });
  } else {
    Users.findById(id)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: 'The user information could not be retrieved.' });
    })
  }
});

// Deletes user account
router.delete('/:id', validateUser, (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: "The user with the specified ID does not exist." })
  }
  Users.remove(id)
   .then(user => {
     res.json(user);
   })
    .catch(err => {
      res.status(500).json({ message: 'The user could not be removed' });
    })
});

// Custom middleware to validate user id.
function validateUser(req, res, next) {
  const id = req.params.id;
  let errors = [];

  Users.findById(id)
     .then(user => {
        if (!user) {
           res.status(404).json({ message: 'There is no such user by that id' });
        } 
        if (!user.username || user.username.length < 2) {
          errors.push('Username must contain at least 2 characters');
        }
        if (!user.password || user.password.length < 4) {
          errors.push('Password must contain at least 4 characters');
        }
        else {
          return {
            isSuccessful: errors.length > 0 ? false : true,
            errors
          },
           next();
        }
     });
}
module.exports = router;