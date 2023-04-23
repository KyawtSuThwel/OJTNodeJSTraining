import { loginService, loginUserService, logoutService, protectedService, signupService, signupUserService } from "../services/AuthService.js"

const signup = (req,res) => {
    signupService(req,res);
}

const signupUser = (req,res) => {
    signupUserService(req,res);
}

const protectedPage = (req,res) => {
    protectedService(req,res);
}

const logout = (req,res) => {
    logoutService(req,res);
}

const login = (req,res) => {
    loginService(req,res);
}

const loginUser = (req,res) => {
    loginUserService(req,res);
}

export {signup,signupUser,protectedPage,logout,login,loginUser}