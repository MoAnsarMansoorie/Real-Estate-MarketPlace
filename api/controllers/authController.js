import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signupController = async (req, res, next) => {
  // console.log(req.body)
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User added successfully!",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};
