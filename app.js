const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = process.env.PORT || 4000

const usercontent = require('./routes/usercontent.route'); 

app.use('/usercontent', usercontent);

app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))