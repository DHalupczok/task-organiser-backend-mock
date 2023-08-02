require('dotenv').config();
const authenticatedRoute = require('./middleware/authMiddleware')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { API_PORT } = process.env;
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes')
const userRoutes = require('./routes/userRoutes')
const typeRoutes = require('./routes/typeRoutes')
const authRoutes = require('./routes/authRoutes')
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/projects', authenticatedRoute, projectRoutes);
app.use('/api/v1/tasks',  taskRoutes)
app.use('/api/v1/users',  userRoutes)
app.use('/api/v1/types', authenticatedRoute,  typeRoutes)
app.use('/api/v1/security', authRoutes)
app.listen(API_PORT);
