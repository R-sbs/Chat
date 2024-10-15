import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    const { firstName, lastName, email, username, password, confirmPassword } =
      req.body;

    //Checking if the Passwords match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Passwords Do not Match, Please try Again!" });
    }

    //checking if the username already exists, if so asking new user to modify his username
    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ error: "Username Already Exists, Please change username" });
    }

    //Hashing the password before storing it in db
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //setting default profilePic
    const profilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl`;

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      profilePic,
    });

    if (newUser) {
      //generate JWT here
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        id: newUser._id,
        firstName: newUser.firstName,
        username: newUser.username,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ Error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in SignUp Controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {

  try {

    const { username, password } = req.body;

    const user = await User.findOne({username});

    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect) {
        res.status(400).json({error: "Invalid Username or Password"})
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
        _id: user._id,
        fullName: user.firstName + " " + user.lastName,
        username: user.username,
        profilePic: user.profilePic,
    })



    
  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logoutUser = (req, res) => {
  try {

    res.cookie("jwt", "", { maxAge: 0 } );
    res.status(200).json({ message: 'Logged Out Successfully'})


  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ error: error.message });
  }
};
