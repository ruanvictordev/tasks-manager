import bcrypt from 'bcrypt';

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


export function throwResError (message, res){
    return res.json({
        error: message
    });
}