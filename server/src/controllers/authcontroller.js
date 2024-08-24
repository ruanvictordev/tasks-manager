import { registerUser, loginUser } from "../services/authService.js";

export const login = async (req, res) => {
    await loginUser(res, {email: req.body.email, passwordHash: req.body.passwordHash});
};

export const register = async (req, res) => {
    await registerUser(res, {email: req.body.email, name: req.body.name, passwordHash: req.body.passwordHash});
};