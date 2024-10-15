import jwt from 'jsonwebtoken';
import { secret } from '../../config.js';

const generateTokenAndSetCookie = ( userId, res) => {

    const token = jwt.sign( {userId}, secret, { expiresIn : "1w"} );

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //miliseconds
        httpOnly: true, //users cannot access this cookie via JS that helps preventing XSS(cross-site scripting) attacks
        sameSite: "strict", // Prevents CSRF(cross site request forgery) attacks 
    });
}

export default generateTokenAndSetCookie;