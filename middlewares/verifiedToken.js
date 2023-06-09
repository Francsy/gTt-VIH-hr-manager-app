const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_key = process.env.JWT_KEY;
const Usuarios = require('../schemas/usuarios');
const adminProtector = express.Router();
const userProtector = express.Router();

adminProtector.use(async (req, res, next) => {
    const token = req.cookies['access-token'];
    if (!token) return res.status(401).json({ message: 'invalidAccess' }); // No token
    try {
        const decoded = jwt.verify(token, jwt_key);
        let userData = await Usuarios.findOne({
            attributes: ['email', 'rol'],
            where: { email: decoded.email }
        })
        if (!userData || userData.rol !== "admin") return res.status(401).json({ message: 'invalidAccess' }); // Token verification failed
        req.decoded = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'invalidAccess' });
    }
});


userProtector.use(async (req, res, next) => {
    const token = req.cookies['access-token'];
    if (!token) return res.status(401).json({ message: 'invalidAccess' }); // No token
    try {
        const decoded = jwt.verify(token, jwt_key);
        let userData = await Usuarios.findOne({
            attributes: ['email', 'rol'],
            where: { email: decoded.email }
        })
        if (!userData) return res.json({ message: 'invalidAccess' }); // Token verification failed
        req.decoded = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'invalidAccess' });
    }
});


module.exports = {
    adminProtector,
    userProtector
}