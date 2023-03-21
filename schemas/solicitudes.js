const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');


const Solicitudes = db.define('solicitudes', {
    solicitud_id: {
        type: DataTypes.INTEGER,
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
    fecha_solicitud: {
        type: DataTypes.DATE,
        allowNull: false,
    }, 
    motivo: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }, 
    revisado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }, 
    aprobado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }, 
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hora_inicio: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    hora_fin: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    duracion:{
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    comentarios: {
        type: DataTypes.STRING(165),
        allowNull: true,
    },
}, {
    db,
    modelName: 'Solicitudes',
    tableName: 'solicitudes',
    timestamps: false,
});

Solicitudes.sync();
module.exports = Solicitudes;
