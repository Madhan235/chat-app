import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import generateTokenAndSetcookie from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"});
        }

     const user = await User.findOne({username});

     if(user){
        return res.status(400).json({error:"Username already exists"});
    }
     
    const hashedPassword = bcryptjs.hashSync(password,10)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?usename=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?usename=${username}`


    const newUser = new User({
           fullName,
           username,
           password : hashedPassword,
           gender,
           profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if(newUser){

        generateTokenAndSetcookie(newUser._id,res);
        await newUser.save();
    
        const {password : pass , ...rest} = newUser._doc ;
    
        res.status(201).json(rest);
    }

    } catch (error) {
        console.log("signup error: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
        }
    }

export const login = async (req, res, next) => {
     try {
        
       const { username, password} = req.body;

       const user = await User.findOne({username});
        

       const verifyPassword =  bcryptjs.compareSync(password,user?.password || "");
          
       if(!user || !verifyPassword){
        return res.status(404).json({error:"Invalid username or password"
       }); }


       generateTokenAndSetcookie( user._id,res);

       res.status(200).json({
            _id:user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic: user.profilePic,
       });

     } catch (error) {

        console.log("login error: ",error.message);
        res.status(500).json({error:"Internal Server Error"});

     }
}

export const logout = async (req, res, next) => {
    try {
        
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"});

    } catch (error) {
        console.log("logout error: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}