import jwt from 'jsonwebtoken';
import UserModel from '../../model/UserModel/index.js';
import 'dotenv/config';

const generateToken = (user) => {
    return jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
}

const registerUser = async (email, password) => {
    try {
        const [status, user] = await UserModel.registerUser(email, password);
        
        if (status === 200) {
            return [status, generateToken(user)];
        }

        return [status, user];
    } catch (e) {
        return [404, null];
    }
}

const signInUser = async (email, password) => {
    try {
        const [status, user] = await UserModel.signInUser(email, password);

        if (status === 200) {
            return [status, generateToken(user)];
        }

        return [status, user];
    } catch (e) {
        return [404, null];
    }
}

const UserService = {
    registerUser,
    signInUser,
}

export default UserService;