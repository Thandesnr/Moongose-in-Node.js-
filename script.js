const mongoose = require("mongoose")
const User = require("./User")
mongoose.connect(
    "mongodb://localhost/testdb",() => {
        console.log("connected")
    },
    e => console.error(e)
)

run()

async function run() {
    try {
        const user = await User.create({
            name:"Eric",
            age: 11,
            email: "thiosh@thiosh.com",
            hobbies: ["running","painting"],
            address: {
                street: "Vaasankatu"
            }
            
        })
        user.name = "Thio"
        await user.save()
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }

}