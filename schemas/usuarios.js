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
        type: DataTypes.STRING(45),
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
        type: DataTypes.STRING(9),
        allowNull: true
    },
    rol: {
        field: 'rol',
        type: DataTypes.STRING(8),
        allowNull: false
    },
    estado: {
        field: 'estado',
        type: DataTypes.STRING(7),
        allowNull: true
    },
    nueva_sesion: {
        field: 'nueva_sesion',
        type: DataTypes.DATE,
        allowNull: true
    }
},
    {
        db,
        modelName: 'Usuarios',
        tableName: 'usuarios',
        timestamps: 'false',
    }
);


/* const Employees = db.define("Employees", {
    idEmployee: {
        field: 'id_employee',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING(35),
    },
    surname: {
        field: 'surname',
        type: DataTypes.STRING(35),
    },
    email: {
        field: 'email',
        type: DataTypes.STRING(40),
        unique: true
    },
    password: {
        field: 'password',
        type: DataTypes.STRING(60)
    },
    role: {
        field: 'role',
        type: DataTypes.STRING(35)
    }
},
    {
        db,
        modelName: 'Employees',
        tableName: 'employees',
        timestamps: 'true',
    }
); */

Usuarios.sync()

/* 

Employees.sync({ force: true })
  .then(() => {
    console.log('Employees model synchronized successfully');
  })
  .catch((error) => {
    console.error('Error synchronizing Employees model:', error);
  });

*/

module.exports = Usuarios