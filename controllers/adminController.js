const Usuarios = require('../schemas/usuarios')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createNewEmployee = async (req, res) => {
    try {
        const { nombre, apellido1, email, password, apellido2, telefono, categoria, jornada } = req.body;
            const hashPassword = await bcrypt.hash(password, saltRounds);
            let newEmployee = await Usuarios.create({ 
                nombre,
                apellido1,
                email, 
                contrasenia: hashPassword,
                rol: categoria,
                jornada_laboral: jornada,
                apellido2: apellido2 || null,
                telefono: telefono || null
            });
            res.status(201).json({ message: '¡Empleado creado con éxito!', employee: newEmployee });
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear empleado' });
    }
}

module.exports = {
    createNewEmployee
}