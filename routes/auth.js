const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Log in user!');
});

// @route   POST api/auth
// @desc    Get log users contacts
// @access  Private
router.post('/', (req, res) => {
  res.send('Get logged user');
});

module.exports = router;
