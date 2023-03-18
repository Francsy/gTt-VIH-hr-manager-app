const Usuarios = require('../schemas/usuarios')
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

module.exports = {
    createNewEmployee
}