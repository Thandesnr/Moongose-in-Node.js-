const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    street:String,
    PostCode: Number,
    City: String
})
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 12,
        max: 99,
        validate: {
            validator: v => v >= 12,
            message: props => `${props.value} years is below the required age`,
        },
    },
    email: {
        type:String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        immutable: true,
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: {type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: addressSchema

})

module.exports = mongoose.model("User",userSchema)