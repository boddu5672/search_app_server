import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import searchRouter from './src/routes/searchrouter.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/search', searchRouter);

const CONNECTION_URL=process.env.CONNECTION_URL;
const PORT  = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });


// // Connect to MongoDB
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// // Access the default connection
// const db = mongoose.connection;

// // Check for connection errors
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// // Once the connection is open, perform the database operations
// db.once('open', async () => {
//     try {
//         // Access the collection and find documents
//         const collection = db.collection('usersdatas'); // Replace 'your_collection_name' with your actual collection name
//         const documents = await collection.find({}).toArray();


        
//         // Output the documents
//         console.log(documents);
//     } catch (error) {
//         console.error('Error retrieving documents:', error);
//     }
// });


// // Define the schema for the UserData collection
// const userSchema = new mongoose.Schema({
//     Name: String,
//     Age: String,
//     Country: String,
//     Mobile: String,
//     Email: String
// });

// // Create a Mongoose model for the UserData collection
// const UserModel = mongoose.model('usersdata', userSchema);

// // Connect to MongoDB using the provided CONNECTION_URL
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(async () => {
//         // Data to be inserted into the UserData collection
//         const userData = ;

//         // Insert data into the UserData collection
//         await UserModel.insertMany(userData);
//         console.log('Data inserted successfully.');

//         // Close the MongoDB connection
//         mongoose.connection.close();
//     })
//     .catch((error) => console.error(error));


