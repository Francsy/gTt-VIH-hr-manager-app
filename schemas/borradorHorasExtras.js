const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');

const HorasExtra = db.define('horas_extra', {
  h_extra_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'usuario_id'
    }
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  h_entrada: {
    type: DataTypes.TIME,
    allowNull: false
  },
  validado_por: {                 // Esto debería ser solo para el 
    type: DataTypes.INTEGER,      //perfil admin.
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'usuario_id'
    }
  },
  h_salida: {
    type: DataTypes.TIME,
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING(165),
    allowNull: false
  },
  estado_validacion: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      isIn: [['aprobado', 'pendiente', 'no_autorizado']]
    }
  }
},
{
    db,
    modelName: 'HorasExtras',
    tableName: 'horas_extras',
    timestamps: false,
}
);



HorasExtra.sync();

module.exports = HorasExtra;