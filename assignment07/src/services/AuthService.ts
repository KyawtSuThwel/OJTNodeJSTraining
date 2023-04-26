import { compareSync } from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { logger } from '../logger/logger';
import User from '../models/User';

/**
 * login service.
 * @param req 
 * @param res 
 */
export const loginService = async (
  req: Request,
  res: Response
) => {
  try {
    const user: any = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: 'Could not find user'
      })
    }

    if (!compareSync(req.body.password, user.password)) {
      return res.status(401).send({
        success: false,
        messages: 'Incorrect password'
      });
    }

    const payload = {
      email: await bcrypt.hash(user.email, 12),
      id: await bcrypt.hash(user.id, 12)
    }

    const token = jwt.sign(payload, 'abcd', { expiresIn: '1d' });

    return res.status(200).send({
      success: true,
      message: 'Login Successfully!',
      user: user,
      token: token
    });
  } catch (err: any) {
    logger.error('Login API Error');
    logger.error(err);
    return res.status(403).send({
      success: false,
      message: 'Login API Error'
    });
  }
}

/**
 * logout service.
 * @param req
 * @param res 
 * @returns 
 */
export const logoutService = (req: any, res: Response) => {
  try {
    req.session = null;
    return res.json({ "message": "Logout Successfully" });
  } catch (err) {
    logger.error('Logout API Error');
    logger.error(err);
    return res.status(403).send({
      success: false,
      message: 'Logout API Error'
    });
  }
};
