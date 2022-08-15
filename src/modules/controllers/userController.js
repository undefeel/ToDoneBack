import { models } from '../../db/schemes/index.js';
import bcrypt from 'bcrypt';
import tokenHelper from '../utils/tokenHelper.js'
import 'dotenv/config';

const register = async (req, res) => {
  try {
    const { userName, login, password } = req.body;

    if (!login || !password || !userName) res.status(400).send('not enough data');
    
    const hashPass = await bcrypt.hash(password, 10);

    const user = await models.user.create({
      userName: userName,
      login: login,
      password: hashPass
    });
    
    const refreshToken = tokenHelper.generateRefresh(user._id, user.userName);
    const accessToken = tokenHelper.generateAccess(user._id, user.userName);

    user.refresh_token = refreshToken;
    await user.save();

    res.status(201).send({refreshToken: refreshToken, accessToken:accessToken});
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send('login must be unique')
    }
    res.status(500).send(error);
  }
}

const login = async (req, res) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) res.status(400).send('login or password not found')

    const user = await models.user.findOne({login: login});

    if (user === null) res.status(400).send('login or password not match');

    const match = await bcrypt.compare(password, user.password)

    if (match) {
      const newRefresh = tokenHelper.generateRefresh(user.id, user.userName);
      const accessToken = tokenHelper.generateAccess(user._id, user.userName);

      user.refresh_token = newRefresh;
      user.save();

      res.status(201).send({refreshToken: refreshToken, accessToken:accessToken});
    } else {
      res.status(400).send('login or password not match');
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export {
  register,
  login
}