const mongoose =require('mongoose')

const userScheme =mongoose.Schema({
    name:{
        type :String ,
        required : [true,'Please add name'],
        unique: true
    },
    email:{
        type :String ,
        required : [true,'Please add an email'],
        unique :true
    },
    password:{
        type :String ,
        required : [true,'Please add a password'],
        unique: true
    },
},
{
    timestamps :true
})

module.exports =mongoose.model('User',userScheme)    