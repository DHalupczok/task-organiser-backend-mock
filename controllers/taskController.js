const Task = require('../models/taskModel')

exports.getAllTasks = (req, res) => {
    const projectId = req.params.projectId;
    const responseData = Task.getAllTasksByProjectId(projectId);
    res.status(200);
    res.send(responseData);
}

exports.createNewTask = (req, res) => {
    const newTask = new Task(req.body.projectId, req.body.title, req.body.startDate, req.body.stopDate, req.body.repeatability, req.body.content);
    newTask.save();
    const responseData = Task.getAllTasksByProjectId(newTask.projectId);
    res.status(200);
    res.send(responseData);
}

exports.editExistingTask = (req, res) => {
    const taskId = req.body.id;

    if (!taskId) {
        res.status(404).send()
        return
    }
    const updateAnswer = Task.updateTaskById(taskId, req.body.projectId, req.body.title, req.body.startDate, req.body.stopDate, req.body.repeatability, req.body.content);
    if (!updateAnswer) {
        res.status(404).send()
        return;
    }
    const responseData = Task.getAllTasksByProjectId(req.body.projectId);
    res.status(200);
    res.send(responseData);
}

exports.deleteExistingTask = (req, res) => {
    const taskId = req.params.taskId;
    if (!taskId) {
        res.status(404).send();
        return;
    }
    const task = Task.getTaskById(taskId);
    if (!task) {
        res.status(404).send();
        return;
    }
    const projectId = task.projectId;
    Task.delete(taskId);
    const responseData = Task.getAllTasksByProjectId(projectId);
    res.status(200);
    res.send(responseData);
}
