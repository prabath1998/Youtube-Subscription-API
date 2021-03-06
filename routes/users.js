const express = require('express');
const router = express.Router();

const User = require('../models/user')

//get all users
router.get('/',async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.send('Error '+error);
    }
});

//add user
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
});

//get user by id
router.get('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.send('Error '+error);
    }
});

//update user
router.patch('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        user.sub = req.body.sub
        const a1 = await user.save();
        res.json(a1);
    } catch (error) {
        res.send('Error')
    }
})

//delete user
router.delete('/:id',async(req,res)=>{
    try {
        const user =await User.findByIdAndRemove(req.params.id);
        res.send("User deleted")
    } catch (error) {
        res.send('Error');
    }
})



module.exports = router;