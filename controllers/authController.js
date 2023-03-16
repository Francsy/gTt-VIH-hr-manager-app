const Usuarios = require('../schemas/usuarios')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const jwt_key = process.env.JWT_KEY;

const createNewEmployee = async (req, res) => {
    try {
        const { nombre, apellido1, email, password, passwordCheck, apellido2, telefono } = req.body;
        if (password === passwordCheck) {
            const hashPassword = await bcrypt.hash(password, saltRounds);
            let newEmployee = await Usuarios.create({ 
                nombre,
                apellido1,
                email, 
                contrasenia: hashPassword,
                rol: 'empleado',
                apellido2: apellido2 || null,
                telefono: telefono || null
            });
            res.status(201).json({ message: 'Empleado creado', employee: newEmployee });
        } else {
            throw new Error('La contraseña no coinciden');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear empleado' });
    }
}

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
            const token = jwt.sign(userToken, jwt_key, { expiresIn: '20m' });
            res.cookie('access-token', token, {
                httpOnly: true
                // secure: process.env.NODE_ENV === "production"
            })
            // .send() ??
            role === 'empleado' ? res.status(201).json({ message: 'empleadoAccess' }) : res.status(201).json({ message: 'adminAccess' })
            console.log('Todo okay')
        } else {
            res.status(400).json({ message: 'wrongCredentials' });
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'DB failed', error });
    }
}


module.exports = {
    createNewEmployee,
    authLogin
}