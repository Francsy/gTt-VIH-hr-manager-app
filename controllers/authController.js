const Employees = require('../schemas/employees')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const jwt_key = process.env.JWT_KEY;

const createNewEmployee = async (req, res) => {
    try {
        const { name, surname, email, password, passwordCheck } = req.body;
        if (password === passwordCheck) {
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

const authLogin = async (req, res) => {
    const { logEmail, logPassword } = req.body;
    try {
        let userData = await Employees.findOne({
            attributes: ['email', 'role', 'password'],
            where: { email: logEmail }
        })

        const { email, role, password } = userData;
        const match = await bcrypt.compare(logPassword, password);
        if (match) {
            const userToken = {
                email,
            }
            const token = jwt.sign(userToken, jwt_key, { expiresIn: '20m' });
            res.cookie('access-token', token, {
                httpOnly: true
                // secure: process.env.NODE_ENV === "production"
            })
            role === 'user' ? res.status(201).json({ message: 'userAccess' }) : res.status(201).json({ message: 'adminAccess' })
            console.log('Todo okay')
        } else {
            res.status(400).json({ message: 'wrongCredentials' });
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'DB failed', error });
    }
}


module.exports = {
    createNewEmployee,
    authLogin
}