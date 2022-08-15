import jwt from "jsonwebtoken";
import 'dotenv/config';


const generateAccess = (id, userName) => {
  return jwt.sign({id: id, login: userName}, process.env.ACCESS_TOKEN_KEY, {expiresIn: '2m'});
}

const generateRefresh = (id, userName) => {
  return jwt.sign({id: id, login: userName}, process.env.REFRESH_TOKEN_KEY, {expiresIn: '10d'});
}

export default { generateAccess, generateRefresh }