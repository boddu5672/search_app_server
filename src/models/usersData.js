import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    Name: String,
    Age: String,
    Country: String,
    Mobile: String,
    Email: String
});

const userModel = model('usersdatas', userSchema);

export default userModel;
