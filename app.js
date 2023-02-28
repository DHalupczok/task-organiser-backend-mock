const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const projectRoutes = require('./routes/projectRoutes');
app.use(bodyParser.json());
app.use('/api/v1/projects', projectRoutes);
app.listen(3000);
