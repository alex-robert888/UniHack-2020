
const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');
const mongoose = require('mongoose');

//require('dotenv').config();

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
const tenantsModule = require('./routes/tenants');
const landlordsModule = require('./routes/landlords');
const contractorsModule = require('./routes/contractors');
const addressesModule = require('./routes/addresses');
const issuesModule = require('./routes/issues');
const notificationsModule = require('./routes/notifications');
app.use('/auth/login', loginModule);
app.use('/auth/signup', signupModule);
app.use('/routes/tenants', tenantsModule);
app.use('/routes/landlords', landlordsModule);
app.use('/routes/contractors', contractorsModule);
app.use('/routes/addresses', addressesModule);
app.use('/routes/issues', issuesModule);
app.use('/routes/notifications', notificationsModule);

//Initialize mongoose
const url = "mongodb+srv://Bizso:TriduckForce@cluster0.obexd.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB database connection established"))

// Handle errors forwarded by requests
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

// Listening on port 
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})