const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');

const ControlHorario = db.define('control_horario', {
    control_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'usuario_id',
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora_entrada: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    hora_salida: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    horas_trabajadas: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
  }, {
    db,
    modelName: 'ControlHorario',
    tableName: 'control_horario',
    timestamps: 'false',
}
  );

  ControlHorario.sync()

  
  module.exports = ControlHorario;