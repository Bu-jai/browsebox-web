const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes')
const cors = require('cors')

const app = express();

// let us use req.body to get form data without parsing
//app.use(bodyParser.urlencoded({ extended: false })); // ========================== needed if using express.json()?
app.use(cors())
app.use(express.json()); 

// use routes
app.use(userRoutes);

app.listen(3001);