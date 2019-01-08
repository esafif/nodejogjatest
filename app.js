const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
let dev_db_url = 'mongodb://esafif:safif3110@ds251804.mlab.com:51804/dbtestnode';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express()
const PORT = process.env.PORT || 4000

const usercontent = require('./routes/usercontent.route'); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/usercontent', usercontent);

app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))