const Usuarios = require('../schemas/usuarios')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAllUsers = async (req, res) => {
    try {
      const users = await Usuarios.findAll({
        attributes: ['usuario_id', 'nombre', 'apellido1', 'fecha_alta_contrato', 'jornada_laboral']
      });
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Hubo un error al obtener los usuarios' });
    }
  };
  

const createNewEmployee = async (req, res) => {
    try {
        const { nombre, apellido1, apellido2, telefono, email, fechaAlta, fechaBaja, categoria, jornada  } = req.body;
            const defaultPassword = "123456";
            const hashPassword = await bcrypt.hash(defaultPassword, saltRounds);
            let newEmployee = await Usuarios.create({ 
                nombre,
                apellido1,
                apellido2: apellido2 || null,
                contrasenia: hashPassword,
                telefono: telefono || null,
                email,
                fecha_alta_contrato: fechaAlta,
                fecha_baja_contrato: fechaBaja || null,
                categoria,
                jornada_laboral: jornada,
                rol: "empleado"
            });
            res.status(201).json({ message: '¡Empleado creado con éxito!', employee: newEmployee });
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear empleado' });
    }
}


module.exports = {
    createNewEmployee,
    getAllUsers
}