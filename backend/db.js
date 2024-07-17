const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://maharanad449:ogvUvXcg9hjTJomE@paytm.s182hqr.mongodb.net/")
const userSchema= mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String
})
const user= mongoose.model('User', userSchema)

module.exports={
    user

};