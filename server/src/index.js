
const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');

// Init express application
const app = express();
app.use(express.json());
app.use(cors());
app.use(volleyball);

// Handle requests & routing
app.get('/', (req, res) => {
    res.json({
        status: '✅'
    })
});

const loginModule = require('./auth/login');
const signupModule = require('./auth/signup');
app.use('/auth/login', loginModule);
app.use('/auth/signup', signupModule);

// Handle errors forwarded by requests
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

// Listening on port 
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})