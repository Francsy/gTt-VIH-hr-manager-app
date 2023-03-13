const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()

const morgan = require('morgan')


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(morgan('dev'))

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}



app.listen(PORT, () => {
    console.log('Working on port ' + PORT)
})