const Usuarios = require('../schemas/usuarios')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const jwt_key = process.env.JWT_KEY;

const authLogin = async (req, res) => {
    const { logEmail, logPassword } = req.body;
    try {
        let userData = await Usuarios.findOne({
            attributes: ['email', 'rol', 'contrasenia'],
            where: { email: logEmail }
        })

        const { email, rol, contrasenia } = userData;
        const match = await bcrypt.compare(logPassword, contrasenia);
        if (match) {
            const userToken = {
                email,
                rol
            }
            const token = jwt.sign(userToken, jwt_key);
            res.status(200).cookie('access-token', token, {
                httpOnly: true
                // secure: process.env.NODE_ENV === "production"
            })
            // .send() ??
            rol === 'empleado' ? res.status(201).json({ message: 'empleadoAccess' }) : res.status(201).json({ message: 'adminAccess' })
        } else {
            res.status(400).json({ message: 'wrongCredentials' });
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'DB failed', error });
    }
}


module.exports = {
    authLogin
}