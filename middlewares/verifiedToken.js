const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_key = process.env.JWT_KEY;
const Usuarios = require('../schemas/usuarios');
const adminProtector = express.Router();
const userProtector = express.Router();

adminProtector.use(async (req, res, next) => {
    const token = req.cookies['access-token'];
    if (!token) return res.json({ message: 'Token not provided' }); // No token
    try {
        const decoded = jwt.verify(token, jwt_key);
        let userData = await Usuarios.findOne({
            attributes: ['email', 'rol'],
            where: { email: decoded.email }
        })
        if (!userData || userData.rol !== "admin") return res.json({ message: 'Invalid token' }); // Token verification failed
        req.decoded = decoded;
        next();
    } catch (error) {
        return res.json({ msg: 'Invalid token' });
    }
});


userProtector.use(async (req, res, next) => {
    const token = req.cookies['access-token'];
    if (!token) return res.json({ message: 'Token not provided' }); // No token
    try {
        const decoded = jwt.verify(token, jwt_key);
        if ((decoded.exp * 1000) < Date.now()) return res.json({ message: 'Expired token' }); // Token had expired
        let userData = await Usuarios.findOne({
            attributes: ['email', 'rol'],
            where: { email: decoded.email }
        })
        if (!userData) return res.json({ message: 'Invalid token' }); // Token verification failed
        req.decoded = decoded;
        next();
    } catch (error) {
        return res.json({ msg: 'Invalid token' });
    }
});


module.exports = {
    adminProtector,
    userProtector
}