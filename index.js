const express = require('express');
const setupDB = require('./config/database');
const app = express();
const router = require('./config/routes');
const port = 3035;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log("running on port" + port);
})

setupDB();

