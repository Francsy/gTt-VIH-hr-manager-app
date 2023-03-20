const Usuarios = require('../schemas/usuarios')


const userAuthChecker = async (req, res) => {
    const {email } = req.decoded
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

module.exports = {
    userAuthChecker
}