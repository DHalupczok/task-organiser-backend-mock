const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes')
const userRoutes = require('./routes/userRoutes')
const typeRoutes = require('./routes/typeRoutes')
app.use(bodyParser.json());
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/tasks', taskRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/types', typeRoutes)
app.listen(5099);
