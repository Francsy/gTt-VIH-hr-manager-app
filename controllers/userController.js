const Usuarios = require('../schemas/usuarios')
const Fichaje = require('../schemas/fichaje')
const moment = require('moment');
const Solicitudes = require('../schemas/solicitudes')




const userAuthChecker = async (req, res) => {
    const { email } = req.decoded
    try {
        let userData = await Usuarios.findOne({
            attributes: ['nombre', 'horas_acumuladas'],
            where: { email: email }
        })
        return res.status(200).json({
            message: "isAuth",
            nombre: userData.nombre,
            horasExtra: userData.horas_acumuladas
        })
    } catch (e) {
        console.log(e.message)
    }

}

const startWorkingDay = async (req, res) => {
    const { email } = req.decoded
    try {
        let user = await Usuarios.findOne({
            attributes: ['usuario_id'],
            where: { email: email }
        })
        const fecha = new Date().toISOString().split('T')[0];

        const existingFichaje = await Fichaje.findOne({
            where: {
                usuario_id: user.usuario_id,
                fecha: fecha,
            }
        });
        if (existingFichaje) {
            return res.status(200).json({ message: 'Ya se ha registrado la hora de entrada para hoy' });
        }

        const hora_entrada = new Date().toISOString().split('T')[1].substr(0, 8);
        const fichaje = await Fichaje.create({
            usuario_id: user.usuario_id,
            fecha,
            hora_entrada,
        });
        res.status(201).json({ message: 'Hora de entrada registrada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al registrar la hora de entrada' });
    }
}

const checkWorkingDay = async (req, res) => {
    const { email } = req.decoded
    try {
        let user = await Usuarios.findOne({
            attributes: ['usuario_id'],
            where: { email: email }
        })
        const fecha = new Date().toISOString().split('T')[0];
        const fichaje = await Fichaje.findOne({
            where: {
                usuario_id: user.usuario_id,
                fecha,
            },
        });

        if (!fichaje || !fichaje.hora_entrada) {
            res.status(200).json({ message: 'notStarted', time: '0 hrs 0 min' });
        } else if (fichaje.hora_salida) {
            const horaEntrada = moment(fichaje.hora_entrada, 'HH:mm:ss');
            const horaSalida = moment(fichaje.hora_salida, 'HH:mm:ss');
            const tiempoTranscurrido = moment.duration(horaSalida.diff(horaEntrada));
            const horas = tiempoTranscurrido.hours();
            const minutos = tiempoTranscurrido.minutes();
            res.status(200).json({ message: 'isEnded', time: `${horas} hrs ${minutos} min`, extraTime: fichaje.horas_extra });
        } else {
            const horaEntrada = moment(fichaje.hora_entrada, 'HH:mm:ss');
            const horaActual = moment(new Date().toISOString().split('T')[1].substr(0, 8), 'HH:mm:ss');
            const tiempoTranscurrido = moment.duration(horaActual.diff(horaEntrada));
            const horas = tiempoTranscurrido.hours();
            const minutos = tiempoTranscurrido.minutes();
            res.status(200).json({ message: 'isStarted', time: `${horas} hrs ${minutos} min` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al comprobar la jornada laboral' });
    }
}

const endWorkingDay = async (req, res) => {
    const { email } = req.decoded;
    try {
        const user = await Usuarios.findOne({
            attributes: ['usuario_id', 'jornada_laboral'],
            where: { email: email }
        });

        // Obtener el fichaje correspondiente a la fecha actual
        const fecha = new Date().toISOString().split('T')[0];
        const fichaje = await Fichaje.findOne({
            where: {
                usuario_id: user.usuario_id,
                fecha,
            },
        });
        if (!fichaje || !fichaje.hora_entrada) {
            res.status(400).json({ message: 'No se ha registrado la hora de entrada' });
            return;
        }
        // Calcular las horas trabajadas y actualizar el fichaje correspondiente
        const horaSalida = new Date().toISOString().split('T')[1].substr(0, 8);
        const horaEntrada = moment(fichaje.hora_entrada, 'HH:mm:ss');
        const horaSalidaMoment = moment(horaSalida, 'HH:mm:ss');
        const tiempoTranscurrido = moment.duration(horaSalidaMoment.diff(horaEntrada));
        const horasTrabajadas = tiempoTranscurrido.asHours().toFixed(2);

        // Actualizar las horas acumuladas y las horas extra 
        const horarioLaboral = user.jornada_laboral / 5; // Dividir por 5 para obtener las horas por día
        let horasCumplidas = parseFloat(horasTrabajadas);
        let horasExtra = 0;
        if (horasCumplidas > horarioLaboral) {
            horasExtra = horasCumplidas - horarioLaboral;
            horasCumplidas = horarioLaboral;
        }
        await fichaje.update({
            hora_salida: horaSalida,
            horas_trabajadas: horasCumplidas,
            horas_extra: horasExtra
        });

        res.status(200).json({ message: 'isEnded' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al registrar la hora de salida' });
    }
}

const createWorkingDayRequest = async (req, res) => {
    const { comment, extraHours } = req.body
    const { email } = req.decoded;
    const fecha = new Date().toISOString().split('T')[0];
    try {
        let user = await Usuarios.findOne({
            attributes: ['usuario_id'],
            where: { email: email }
        })
        const fichaje = await Fichaje.findOne({
            where: {
                usuario_id: user.usuario_id,
                fecha,
            },
        });

        const duracionHorasExtra = fichaje.horas_extra.toString() + " horas";
        const duracionJornada = fichaje.horas_trabajadas.toString() + " horas"
        Solicitudes.create({
            usuario_id: user.usuario_id,
            fecha_solicitud: fecha,
            revisado: false,
            aprobado: false,
            motivo: extraHours ? "Horas extra" : "Otros",
            comentarios: comment,
            duracion: extraHours ? duracionHorasExtra : duracionJornada
        });
        res.status(200).json({ message: 'isSent' });
    } catch (error) {
        res.status(500).json({ message: 'Ha ocurrido un error al enviar solicitud' })
    }
}



module.exports = {
    userAuthChecker,
    startWorkingDay,
    checkWorkingDay,
    endWorkingDay,
    createWorkingDayRequest
}