import { Request, Response } from 'express';
import { 
  loginService,
  logoutService,
} from '../services/AuthService';

export const login = async (
  req: Request,
  res: Response
) => {
  loginService(req, res);
};

export const logout = (req: any, res: Response) => {
  logoutService(req, res);
};