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
        type: DataTypes.STRING(40)
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

Employees.sync();

module.exports = Employees