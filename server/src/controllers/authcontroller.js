import { registerUser, loginUser, logoutUser } from "../services/authService.js";

export const login = async (req, res) => {
    await loginUser(res, {email: req.body.email, passwordHash: req.body.password});
};

export const logout = async (req, res) => {
    await logoutUser(res);
};

export const register = async (req, res) => {
    await registerUser(res, {email: req.body.email, name: req.body.name, passwordHash: req.body.passwordHash});
};