const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://hzdr:12345@cluster0.dx38x.mongodb.net/ToDo' , {useNewUrlParser : true} , {useUnifiedTopology:true})

const userSchema = {
    name : String,
    password : String,
    email : String,

}

const User = mongoose.model("User", userSchema)
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/" , function(req,res) {
    let newUser = new User({
        name: req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.password
    })
    newUser.save();
    res.redirect('/')
})


app.listen(3000 , function() {
    console.log('server is running on 3000')
})