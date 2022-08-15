import jwt from "jsonwebtoken";
import 'dotenv/config';
import tokenHelper from "../utils/tokenHelper.js";

const tokenVerif = async (req, res, next) => {
  try {
    const token = req.query;
    console.log(token);

    if (!token) res.status(400).send('Tooooken not found');

    if (token.accessToken) {
      jwt.verify(token.accessToken, process.env.ACCESS_TOKEN_KEY);
    } else {
      const user = jwt.verify(token.refreshToken, process.env.REFRESH_TOKEN_KEY);
      const newAccess = tokenHelper.generateAccess(user._id, user.userName);
      res.status(201).send({accessToken: newAccess});
    }

    next();
  } catch (error) {
    res.status(401).send(error);
  }
}

export { tokenVerif }