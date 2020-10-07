var express = require("express");
var router = express.Router();
const UserSchema = require('../models/UserSchema')
const users = require('../models/UserSchema')
const scorekeeping = require('../models/TheMatchingGameSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
/* GET users listing. */

router.get("/", async function (req, res, next) {
  res.send("yea!");
  const ss = await user.find({})
  console.log(ss)
  // res.send(ss);
});

router.post("/register", async (req, res) => { 
  console.log('registering')
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new UserSchema()
    user.username = await req.body.username
    user.email = await req.body.email
    user.password = await hashedPassword
    await user.save()
    res.send("has been created");
  } catch (err) {
    res.send({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  const user = await users.findOne({ username: req.body.username }) //this is how you'd find a particulatr cluster in a collection 
  if (user === null) {
    return res.status(400).send("Cannot find user")
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('success, password to the corresponding user was a match')
      //~ if correct then give token so the client had access to their data
    } else {
      res.send('incorrect password...')
    } 
  } catch (err) {
    res.status(500).send()
  }
})

module.exports = router;
