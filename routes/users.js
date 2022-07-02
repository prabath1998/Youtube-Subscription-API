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
    const user = new User({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    });
    try {
        const a1 = await user.save();
        res.json(a1);
    } catch (error) {
        res.send('Error');
    }
})

module.exports = router;