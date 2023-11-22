const { Schema, model } = require('mongoose')


const personSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
            validate: {
                validator: v => v >= 18,
                message: props => `${props.value} is less than required age`
            }
        },
        favorite_food : [String],
    },
    {
        timeStamps: true,
    }
)

module.exports = model('Person', personSchema)
