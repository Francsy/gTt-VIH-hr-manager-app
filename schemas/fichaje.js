const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');

const Fichaje = db.define('fichaje', {
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
        allowNull: true,
    },
    hora_salida: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    horas_trabajadas: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: true,
    },
    horas_extra: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: true,
    }
}, {
    db,
    modelName: 'Fichaje',
    tableName: 'fichaje',
    timestamps: false,
}
);

Fichaje.sync()


module.exports = Fichaje;