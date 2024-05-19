const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req,res) =>{
    try {
        res.status(200).send("Welcome");
    } catch (error) {
        console.log(error);
    }
}

/*
-------------------------------------
User registration logic
-------------------------------------
*/


const register = async (req,res)=>{
    try {
        const {userName,email,password,phone} = req.body;
        const userExist = await User.findOne({email:email});


        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }

        const userCreated = await User.create({userName,email,password,phone});
        
        
        res.status(201).json({
            msg:"registration succesfull",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        })
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

/*
------------------------------------

USer Login logic
------------------------------------
*/

const login = async (req,res)=>{
    try {
        
        const {email,password} = req.body;

        const userExists = await User.findOne({email:email});
        if(!userExists){
            res.status(400).json({msg:"Invalid Credentials"});
        }

        const user = await userExists.comparePassword(password);
        

        if(user){
            res.status(201).json({
                msg:"Login succesfull",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            })
        }else{
            res.status(401).json({msg:"Invalid email or password"});
        }

    } catch (error) {
        // res.status(500).json("Internal server error");
        next(error);
    }
}


/*
------------------------------------------------
to send user data - User Logic
------------------------------------------------
*/
const user = async (req,res)=>{
    try {

        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`error from user route ${error}`);
    }
}

module.exports = {home,register,login,user}