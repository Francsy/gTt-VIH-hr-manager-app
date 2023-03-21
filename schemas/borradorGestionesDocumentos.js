const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');

const GestionesDocumentos = db.define('gestiones_documentos', {
  documentos_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  gestion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Gestiones',
      key: 'gestion_id'
    }
  },
  ruta_archivo: {
    type: DataTypes.STRING(165),
    allowNull: true
  }
}, {
    db,
    modelName: 'GestionesDocumentos',
    tableName: 'gestiones_documentos',
    timestamps: false,
});

GestionesDocumentos.sync();

module.exports = GestionesDocumentos;
