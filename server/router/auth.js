const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
require("../db/conn");
const User = require("../models/contactSchema")

router.post('/contact', [

    body('name', 'enter a valid name').isLength({ min: 5 }),
    body('email', 'enter a valid email').isEmail(),
    body('subject', 'enter a valid subject'),
    body('message', 'enter a valid message'),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
 // USER CREATION IN DATBASE 

    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" })
        }
            else{

                const user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    subject: req.body.subject,
                    message: req.body.message,
        
                })
                res.json({ user })
                console.log(user)
                //   user regstration 
                const userRegister = await user.save()
                if (userRegister) {
                    res.status(201).json({ message: `${user}  User Successsfully Register` })
                }
                else {
                    res.status(422).json({ error: "failed to register" })
                }
            }

    } catch (err) {
    console.log(err);
    }
   

});
module.exports = router


