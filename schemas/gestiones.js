const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');
const Usuarios = require('./usuarios')
const TipoGestion = require('./tipoGestion')


const Gestiones = db.define('gestiones', {
    gestion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo_gestion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    motivo: {
        type: DataTypes.STRING(165),
        allowNull: true,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'usuario_id',
        },
    },
    lugar: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    tipo_gastos: {
        type: DataTypes.STRING(15),
        allowNull: true,
        validate: {
            isIn: [['desplazamiento', 'alojamiento', 'alimentacion', 'otros']]
        }
    },
    valor: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: true,
    },
}, {
    db,
    modelName: 'Gestiones',
    tableName: 'gestiones',
    timestamps: false,
});

Gestiones.belongsTo(Usuarios, { foreignKey: 'usuario_id', targetKey: 'usuario_id' });
Gestiones.belongsTo(TipoGestion, { foreignKey: 'tipo_gestion_id', targetKey: 'tipo_gestion_id' });

Gestiones.sync();
module.exports = Gestiones;
