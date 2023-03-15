// const express = require('express');
// const jwt = require('jsonwebtoken');
// const jwt_key = process.env.JWT_KEY;
// const Employee = require('../schemas/employees');

// const adminProtector = express.Router();
// const userProtector = express.Router();


/* 
adminProtector.use(async (req, res, next) => {
    const token = req.cookies['access-token'];
    if (!token) return res.json({ message: 'Token not provided' }); // No token
    try {
        const decoded = jwt.verify(token, jwt_key);
        if ((decoded.exp * 1000) < Date.now()) return res.json({ msg: 'Expired token' }); // Token had expired
    
        // const userData = await users.getRole(decoded.email);
        if (!userData || userData[0].logged_in !== true || userData[0].role !== "admin") return res.json({ msg: 'Invalid token' }); // Token verification failed

        const userForToken = {
            email: decoded.email,
            id: decoded.id
        };
        const newToken = jwt.sign(userForToken, jwt_key, { expiresIn: '20m' }); // Renew the admin toker
        res.cookie('access-token', newToken, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production"
        });
        req.decoded = decoded;
        next();
    } catch (error) {
        return res.json({ msg: 'Invalid token' });
    }
});
 */