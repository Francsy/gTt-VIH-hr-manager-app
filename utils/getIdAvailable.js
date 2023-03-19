const Usuarios = require('../schemas/usuarios')


const getIdAvailable = async () => {
    try {
        let usersIds = await Usuarios.findAll({ attributes: ['usuario_id'] })
        let allIds = usersIds.map(user => user.usuario_id)
        allIds.sort((a,b) => a - b)
        let idsBeforeAvailable = allIds.filter((id, i) => id === i + 1 )
        let newId = idsBeforeAvailable.length + 1;
        return newId
    } catch (err) {
        throw err
    }
}
  
  module.exports = getIdAvailable;