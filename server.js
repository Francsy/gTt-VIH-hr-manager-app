const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require("cookie-parser");
require('dotenv').config()
require('./utils/sqlConnection')
const { userProtector, adminProtector } = require('./middlewares/verifiedToken');



const morgan = require('morgan')
const errorManager = require('./middlewares/errorManager');


const app = express();
const PORT = process.env.PORT || 5000;

const adminRoutes = require('./routes/adminRoutes')
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes')

app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/admin', adminProtector, adminRoutes)
app.use('/api/user', userProtector, userRoutes)
app.use('/api', authRoutes)

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.use(errorManager)

app.listen(PORT, () => {
    console.log('Working on port ' + PORT)
})