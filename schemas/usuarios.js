const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');

const Usuarios = db.define('Usuarios', {
    usuario_id: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    contrasenia: {
        field: 'contrasenia',
        type: DataTypes.STRING(60),
        allowNull: false
    },
    nombre: {
        field: 'nombre',
        type: DataTypes.STRING(75),
        allowNull: false
    },
    apellido1: {
        field: 'apellido1',
        type: DataTypes.STRING(45),
        allowNull: false
    },
    apellido2: {
        field: 'apellido2',
        type: DataTypes.STRING(45),
        allowNull: true
    },
    email: {
        field: 'email',
        type: DataTypes.STRING(75),
        allowNull: false,
        unique: true
    },
    telefono: {
        field: 'telefono',
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fecha_alta_contrato: {
        field: 'fecha_alta_contrato',
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    fecha_baja_contrato: {
        field: 'fecha_baja_contrato',
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    jornada_laboral: {
        field: 'jornada_laboral',
        type: DataTypes.INTEGER,
        allowNull: true
    },
    categoria: {
        field: 'categoria',
        type: DataTypes.STRING(30),
        allowNull: true
    },
    rol: {
        field: 'rol',
        type: DataTypes.STRING(8),
        allowNull: false
    }, horas_acumuladas: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
    }
},
    {
        db,
        modelName: 'Usuarios',
        tableName: 'usuarios',
        timestamps: false,
    }
);



Usuarios.sync()



// Usuarios.sync({ force: true })
//   .then(() => {
//     console.log('Usuarios model synchronized successfully');
//   })
//   .catch((error) => {
//     console.error('Error synchronizing Usuarios model:', error);
//   });



module.exports = Usuarios