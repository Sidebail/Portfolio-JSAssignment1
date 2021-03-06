const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// 1 - Render Login Form
router.get('/login', (req, res) =>
  res.render('login', { buttonText: 'Login' })
);
// 2 - Handle Login Form Submission
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/projects'
  })
);

// 3 - Render Register Form
router.get('/register', (req, res) =>
  res.render('login', { buttonText: 'Register' })
);
// 4 - Handle Register Form Submission
router.post('/register', (req, res) => {
  User.register(
    new User({ username: "devPort" }),
    req.body.password,
    function(err, account) {
      if (err) {
        console.log(err);
        return res.render('register', { account: account });
      }

      passport.authenticate('local')(req, res, function() {
        res.redirect('/projects');
      });
    }
  );
});
// 5 - Log out
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/login');
  });
});

module.exports = router;