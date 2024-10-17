import jwt from 'jsonwebtoken';
import { secret } from '../../config.js';
import User from '../models/user.model.js';

const protectRoute =  async (req, res, next) => {
    try {
        
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({ error: 'Token is Not provided'})
        }

        const decoded = jwt.verify( token, secret );
        if(!decoded) {
            return res.status(401).json({ error: 'Token is Invalid'})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.status(404).json({ error: "User not Found"})
        }

        req.user = user;

        next();

    } catch (error) {
        console.log('Error in protectROute middleware', error.message);
        res.status(500).json({ error: 'Internal Server Error'})
    }
}

export default protectRoute;