const { db } = require('../utils/sqlConnection')
const { DataTypes } = require('sequelize');

const Employees = db.define("Employees", {
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
);

Employees.sync()
// Employees.sync({ force: true })
//   .then(() => {
//     console.log('Employees model synchronized successfully');
//   })
//   .catch((error) => {
//     console.error('Error synchronizing Employees model:', error);
//   });

module.exports = Employees