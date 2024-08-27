import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = async (plainPassword) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error While Password Encrypt: ' + error.message);
    }
};

export const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error When Compare Passwords: ' + error.message);
    }
};

export const generateWebToken = (user, res) => {
    const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );
    
    res.cookie('jwt', token, {
        httpOnly: false, 
        sameSite: 'lax',
        maxAge: 3600000,
        path: '/', 
        domain: 'localhost' 
    });
}

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ error: 'Access Denied: No Token Provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.authorId = decoded.id;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid Token' });
    }
};

export function throwResError (message, res){
    return res.json({
        error: message
    });
}