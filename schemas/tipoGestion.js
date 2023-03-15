const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');

const TipoGestion = db.define('tipo_gestion', {
    tipo_gestion_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    tipo_gestion: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    db,
    modelName: 'TipoGestion',
    tableName: 'tipo_gestion',
    timestamps: 'false',
});

TipoGestion.sync();
 module.exports = TipoGestion