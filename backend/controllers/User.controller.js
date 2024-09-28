const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registeruser = async (req, res) => {
  try {
    const { username, fullname, password, confirmPassword, gender } = req.body;

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }
    if (!fullname) {
      return res.status(400).json({ message: "Fullname is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    if (!confirmPassword) {
      return res.status(400).json({ message: "Confirm Password is required" });
    }
    if (!gender) {
      return res.status(400).json({ message: "Gender is required" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    if (gender === "male") {
      profilePicture =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    } else if (gender === "female") {
      profilePicture =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    } else {
      profilePicture =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    }
    const newUser = new User({
      username,
      fullname,
      password: hashedPassword,
      gender,
      profilePicture,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginuser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const tokendata = {
      userId: user._id,
    };

    const token = jwt.sign(tokendata, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("token", token, {
        path: "http://localhost:5173/login",
        httpOnly: true,
        secure: false,
        sameSite: "none",
      })
      .json({ message: "Login successful", user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logoutuser = async (req, res) => {
  try {
    res.clearCookie("token"); // Clear localStorage on the client-side
    res.setHeader("Clear-Site-Data", '"storage"');
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getotheruser = async (req, res) => {
  try {
    const loginuserid = req.id;
    const otheruser = await User.findOne({ _id: { $ne: loginuserid } }).select(
      "-password"
    );
    res.status(200).json({ otheruser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registeruser,
  loginuser,
  logoutuser,
  logoutuser,
  getotheruser,
};
