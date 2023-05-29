import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Register user
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      occupation,
    } = req.body;

    const salt = await bycrpt.genSalt();
    const passwordHarsh = await bycrpt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHarsh,
      picturePath,
      friends,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ erorr: "User does not exits" });
    }

    const isMatch = await bycrpt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
