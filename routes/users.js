const express = require('express');
const router = express.Router();

const User = require('../models/user')

router.get('/',async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.send('Error '+error);
    }
});

router.post('/',async(req,res)=>{
    
})

module.exports = router;