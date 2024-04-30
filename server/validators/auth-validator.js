const {z} = require("zod");


// creating an object schema
const signupSchema = z.object({
    userName:z
    .string({required_error:"Name is required"}).trim().min(3,{message:"Name must be of atleast of 3 characters"}).max(255,{message:"Name must be of atmost of 255 characters"}),

    email:z
    .string({required_error:"Email is required"}).trim().min(3,{message:"Email must be of atleast of 3 characters"}).max(255,{message:"Email must be of atmost of 255 characters"}),

    phone:z
    .string({required_error:"Phone Number is required"}).trim().min(10,{message:"Phone Number must be atleast 10 characters"}).max(12,{message:"Phone number must be atmost 12 characters only"}),

    password:z
    .string({required_error:"Password is required"}).trim().min(7,{message:"Password must be of atleast of 7 characters"}).max(255,{message:"Password must be of atmost of 255 characters"}),

})

module.exports = signupSchema;