const express = require('express')
const router = express.Router()
const TheMatchingGameSchema = require('../models/TheMatchingGameSchema')
const bcrypt = require('bcrypt')

router.get('/', (req, res, next) => {
   console.log('get all items from db')
   // res.send('did it rk???')
   res.json('sdsd')
})

router.get('/:id', async (req, res) => {
   console.log('get specific item in itemsCollection ', req.params.id)
})

router.post('/', (req, res) => {
   //@ mongoose here
   // const scorekeeping = new TheMatchingGameSchema(req.body)
   // try {
   //    scorekeeping.save()
   // } catch {
   //    res.json({ message: err })
   // }
   //@ or 
   try {
      TheMatchingGameSchema.create(req.body) //save automagically
   } catch {
      res.json({ message: err })
   }


   // const matchGameSchema = new TheMatchingGameSchema({
   //    highround: res.body.highround,
   //    highscore: res.body.highscore,
   //    username: res.body.username
   // })
})

router.delete(':id', (res, req) => {
   console.log('delete specific item')
})

module.exports = router
