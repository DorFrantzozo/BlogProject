import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid details" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid details" });
    }

    if (user.email === email && user.password === password) {
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
      //   { expiresIn: "1h" }
      );
      res.status(200).json({ message: "Login successful", user, token });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in user", error });
  }
};


function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}


export { loginUser, createUser, authenticateToken };
