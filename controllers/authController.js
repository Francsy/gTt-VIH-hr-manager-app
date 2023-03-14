const Employees = require('../schemas/employees')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createNewEmployee = async (req, res) => {
    try {
        const { name, surname, email, password, passwordCheck } = req.body;
        if (password === passwordCheck) {
            const hashPassword = await bcrypt.hash(password, saltRounds);
            let newEmployee = await Employees.create({ name, surname, email, password: hashPassword, role: 'user' });
            res.status(201).json({ message: 'Employee created', employee: newEmployee });
        } else {
            throw new Error('Passwords do not match');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
}

const userLogin = async (req, res) => {


}

module.exports = {
    createNewEmployee,
    userLogin
}