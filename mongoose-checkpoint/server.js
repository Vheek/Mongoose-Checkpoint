require('dotenv').config()
const express = require('express')
const { ObjectId } = require('mongodb')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./src/config/dbConn')
const Person = require('./src/models/person.model')


//Connect to mongoDB
connectDB()



// creating and saving a record of a model
// run()
async function run (){
    try {
        const person = await Person.create({
            name: "Usman",
            age: 18,
            favorite_food: ["yam", "egg"]
        })
        console.log(person)
    } catch (error) {
        console.log(error.message)
    }
}



//adding multiple models

// addMany()
async function addMany(){
    try {
        const peoples = await Person.create([
            {
                name: "imole",
                age: 34,
                favorite_food: ["beans", "bread"]
            },
            {
                name: "Yvonne",
                age: 28,
                favorite_food: ["salad", "rice"]
            },
            {
                name: "chris",
                age: 21,
                favorite_food: ["akpu", "vegetable"]
            }
        ])
        console.log(peoples)
    } catch (error) {
        console.log(error.message)
    }
}


// finding a single user with the name 
// findModel()
async function findModel (){
    try {
        const filtered = await Person.find({
            name: "chris"
        })
        console.log(filtered) 
    } catch (error) {
        console.log(error.message)
    }
}


// searching for food
// findFood()
async function findFood(){
    try {
        const foodie = await Person.findOne({
            favorite_food: "akpu"
        })
        console.log(foodie)
    } catch (error) {
        console.log(error.message)
    }
}



//find model using ID
// findById() 
async function findById(){
    try {
        const id = await Person.findById({
            _id: ObjectId("621529bef251a60c81a71089")
        })
        console.log(id)
    } catch (error) {
        console.log(error.message)
    }
} 



// updating food with hamburger
async function findById(){
    try {
        const id = await Person.findById({
            _id: ObjectId("621529bef251a60c81a71089")
        })
        id.favorite_food.push("hamburger")
        console.log(id)
    } catch (error) {
        console.log(error.message)
    }
}  



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => console.log('Server running on port 5000'))
})

