const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes')
app.use(bodyParser.json());
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/tasks', taskRoutes)
app.listen(3000);
