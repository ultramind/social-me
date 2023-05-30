import jwt from "jsonwebtoken";

export const verifyUser = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) return res.send("Access denield");

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    // verify suing jwt verify
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
