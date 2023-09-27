import mongoose from "mongoose";

//Schema for Mongoose
const schema = mongoose.Schema({
    name: String,
    email: String, 
    password: String
});

//Mongoose Model
const User = mongoose.model("User", schema);

export default User;