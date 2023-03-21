const Usuarios = require('../schemas/usuarios')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const getIdAvailable = require('../utils/getIdAvailable')
const Solicitudes = require('../schemas/solicitudes')

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
        const usuario_id = await getIdAvailable();
        let newEmployee = await Usuarios.create({
            usuario_id,
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
            rol: "empleado",
            horas_acumuladas: 0
        });
        res.status(201).json({ message: '¡Empleado creado con éxito!', employee: newEmployee });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear empleado' });
    }
}

const removeEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Usuarios.destroy({
            where: {
                usuario_id: id
            }
        });
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al eliminar el usuario' });
    }
}

const adminAuthCheck = async (req, res) => {
    const { email } = req.decoded
    console.log(email)
    try {
        let userData = await Usuarios.findOne({
            attributes: ['nombre'],
            where: { email: email }
        })
        return res.status(200).json({
            message: "isAuth",
            nombre: userData.nombre
        })
    } catch (e) {
        console.log(e.message)
    }
}


const getAllRequests = async (req, res) => {
    try {
        const requests = await Solicitudes.findAll({
            attributes: ['fecha_solicitud', 'solicitud_id', 'duracion', 'motivo', 'aprobado', 'revisado'],
            include: [{
                model: Usuarios,
                attributes: ['nombre', 'apellido1']
            }]
        });       
        res.status(200).json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener los usuarios' });
    }
};

const getRequest = async (req, res) => {
    const { id } = req.params
    try {
        const request = await Solicitudes.findOne({
            where: {
                solicitud_id: id
            },
            include: [{
                model: Usuarios,
                attributes: ['nombre', 'apellido1', 'apellido2', 'jornada_laboral', 'categoria']
            }]
        });       
        res.status(200).json(request);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al obtener la solicitud' });
    }
}

const allowRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const request = await Solicitudes.findByPk(id)
        request.aprobado = true;
        request.revisado = true;
        await request.save();
        if (request.motivo === 'Horas extra') {
            const user = await Usuarios.findByPk(request.usuario_id)
            const horasString = request.duracion;
            const horas = parseFloat(horasString.replace('horas', '').trim());
            user.horas_extra += horas
            await user.save()
        }
        res.status(200).json({ message: "Solicitud aprobada con éxito", request });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al aprobar solicitud" });
    }
};

const rejectRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const request = await Solicitudes.findByPk(id);
        request.aprobado = false;
        request.revisado = true;
        await request.save();
        res.status(200).json({ message: "Solicitud aprobada con éxito", request });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al aprobar solicitud" });
    }
};

const createRequest = async (req, res) => {
    const { email,fechaInicio, fechaFin, motivo, comment } = req.body
    try {
        let user = await Usuarios.findOne({
            attributes: ['usuario_id'],
            where: { email }
        })
        if (!user) {
            res.status(200).json({ message: "No hay ningún usuario con ese email" });

        }
        const fecha = new Date().toISOString().split('T')[0];
        
        const inicio = new Date(fechaInicio)
        const fin = new Date(fechaFin)
        const diferencia = fin.getTime() - inicio.getTime();
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
        const duracion = dias === 0 ? `${horas.toFixed(2)} horas` : `${dias} días ${horas.toFixed(2)} horas`;
        Solicitudes.create({
            usuario_id: user.usuario_id,
            fecha_solicitud: fecha,
            revisado: false,
            aprobado: false,
            motivo: motivo,
            comentarios: comment,
            duracion
        });
        res.status(200).json({ message: "¡Solicitud realizada con éxito!" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la solicitud " });
    }
}

const getPendingRequestsLength = async (req, res) => {
    try {
      const pendingRequests = await Solicitudes.findAll({
        where: {
          revisado: false
        }
      });
      const length = pendingRequests.length;
      res.status(200).json({ length });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Hubo un error al obtener las solicitudes pendientes' });
    }
  }





module.exports = {
    createNewEmployee,
    getAllUsers,
    getUserData,
    updateEmployeeById,
    removeEmployee,
    adminAuthCheck,
    getAllRequests,
    getRequest,
    allowRequest,
    rejectRequest,
    createRequest,
    getPendingRequestsLength
}