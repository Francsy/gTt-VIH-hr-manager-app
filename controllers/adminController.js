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

const getUserData = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Usuarios.findOne({
            where: {
                usuario_id: id
            },
            attributes: ['nombre', 'apellido1', 'apellido2', 'email', 'telefono', 'fecha_alta_contrato', 'fecha_baja_contrato', 'categoria', 'jornada_laboral']
        });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener el usuario' });
    }
}

const updateEmployeeById = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, apellido1, apellido2, telefono, email, fechaAlta, fechaBaja, categoria, jornada } = req.body;
      const employee = await Usuarios.findByPk(id);
  
      if (!employee) {
        return res.status(404).json({ message: "Empleado no encontrado" });
      }
  
      employee.nombre = nombre;
      employee.apellido1 = apellido1;
      employee.apellido2 = apellido2 || null;
      employee.telefono = telefono || null;
      employee.email = email;
      employee.fecha_alta_contrato = fechaAlta;
      employee.fecha_baja_contrato = fechaBaja || null;
      employee.categoria = categoria;
      employee.jornada_laboral = jornada;
  
      await employee.save();
  
      res.status(200).json({ message: "Empleado actualizado con éxito", employee });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al actualizar empleado" });
    }
  };
  

const createNewEmployee = async (req, res) => {
    try {
        const { nombre, apellido1, apellido2, telefono, email, fechaAlta, fechaBaja, categoria, jornada } = req.body;
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
    getAllUsers,
    getUserData,
    updateEmployeeById
}