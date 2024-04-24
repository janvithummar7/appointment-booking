const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const v=require("validator")
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/react1');
    const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            trim:true,
            minlength:[3,"Min length must be 3"],
            maxlength:[15,"max length must be 15"]
        },
        email: {
            type:String,
            required:true,
            validate(val)
            {
            if(!v.isEmail(val))
            {
            throw new Error("Enter valid email_id")
            }
            }
        },
        date: Date,
        number:{
            type:Number,
            required:true,
            maxlength:[10,"max length must be 10"],
        },
        notes: {
            type:String,
            maxlength:[100,"max length must be 100"]
        }
});

const User = new mongoose.model('User', UserSchema);

app.post('/book', async (req, res) => {
    try {
        const newUser = new User({
            name:req.body.formData.name,
            email:req.body.formData.email,
            date:req.body.formData.date,
            number:req.body.formData.number,
            notes:req.body.formData.notes
    });
        await newUser.save();
        res.send();
    } catch (error) {
        res.send(error);
    }
});
app.listen(3001);