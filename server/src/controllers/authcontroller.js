import { createUser } from "../services/authService.js";

export const login = (req, res) => {
    res.send('<h1>Login Page</h1>');
};

export const register = (req, res) => {
    createUser(res, {email: req.body.email, name: req.body.name, passwordHash: req.body.passwordHash});
};