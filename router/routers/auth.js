const express = require('express');
const router = express.Router();
const User = require('../models/userschema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');


router.post('/register', async (req, res) => {
    const { username, email, password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "Please fill in all the fields" , authFlag : false});
    }
    try {
        console.log(username, email, password);
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ error: "User already exists" , authFlag : false});
        }

        
        const user = new User({
            name: username,
            email: email,
            password: password,

        });
        console.log(username, email, password);
        await  user.save();
        console.log(username, email, password);
        
        res.status(201).json({ message: "Registration successful" , authFlag : true});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("hello world",req.body)

    if (!email || !password) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
   console.log(" we have reached till here ")
    try {
        const user = await User.findOne({ email: email });
        console.log("now here ")
        console.log(user)
        if (!user) {
            console.log("this is here ")
            return res.status(403).json({ message: "User does not exist" ,authFlag : false});
        }
        console.log(" we are here")
        let userPassword = await User.findOne({email:email})
        userPassword = userPassword.password
        console.log(userPassword,password)
        const isPasswordValid = await bcrypt.compare(password,userPassword)
        if (!isPasswordValid) {
            return res.status(403).json({ message: "Invalid credentials" ,authFlag : false});
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 2598200000),
            httpOnly: true
        });

        res.status(200).json({ message: "Authentication successful" , authFlag : true});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" , authFlag : false});
    }
});

// if (req.cookies && req.cookies.jwttoken) {
//     const token = req.cookies.jwttoken;
//     // Your code to handle the token
// } else {
//     console.log('Cookie not found');
// }
// router.get('/profile', async (req, res) => {
//     console.log(req.cookies);
//     try {
//         const token = req.cookies.jwttoken;
//         if(!token){
//             console.log('unauthorized');
//         }
        
//         // }
//         // const user = await User.findByToken(token);
//         const user = await User.findById(req.user._id).select("-password");
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });
// const fetchUser = dispatch => async () => {
//     const response = await sellerApi.get("/api/users/profile");
//     console.log(response.data);
//     dispatch({ type: "fetch_user", payload: response.data });
//   };
// const User = require('./api/user/userschema');





// router.get('/profile', async (req, res) => {
//     console.log(req.cookies);
//     console.log('ghelllll');
//     try {
//         console.log(User)
//         console.log("raaaa");
//         const user= await User.findOne({username:req.params.username})
//         console.log(user)
//         if(!user){
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json(user);
//         }
        
//     catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });


module.exports = router;
