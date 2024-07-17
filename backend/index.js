const express = require('express');
const cors=  require('cors');

app.use(cors());
app.use(express.json());
const mainrouter= require('./router/index')
const app = express();

app.use('/api/v1', mainrouter);

app.listen(3000)