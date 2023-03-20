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
        allowNull: true,
    }, 
    revisado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }, 
    aprobado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }, 
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_fin: {
        type: DataTypes.TIME,
        allowNull: false,
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
module.exports = Gestiones;
