const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes')
const userRoutes = require('./routes/userRoutes')
app.use(bodyParser.json());
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/tasks', taskRoutes)
app.use('/api/v1/users', userRoutes)
app.listen(8080);
