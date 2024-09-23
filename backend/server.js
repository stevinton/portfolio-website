const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();

app.use(express.json());
app.use('/', router);

mongoose.connect("mongodb+srv://stev:oEyquvY41Yjh2qyc@mealdb.azgyqgi.mongodb.net/?retryWrites=true&w=majority&appName=MealDB")
    .then(() => {
        app.listen(8080, () => {
            console.log(`Server is listening on port 8080`);
        });
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
