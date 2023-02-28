const Project = require('../models/projectModel')

exports.getAllProjects = (req, res) => {
    const responseData = Project.getAllProjects();
    res.status(200);
    res.send(responseData);
}

exports.createNewProject = (req, res) => {
    const newProject = new Project(req.body.name, req.body.types);
    newProject.save();
    const responseData = Project.getAllProjects();
    res.status(200);
    res.send(responseData);
}

exports.editExistingProject = (req, res) => {
    const updatedProject = req.body;
    Project.updateById(id, updatedProject)
    const responseData = Project.getAllProjects();
    res.status(200);
    res.send(responseData);
}

exports.deleteExistingProject = (req, res) => {
    const id = req.params.projectId;
    Project.delete(id);
    const responseData = Project.getAllProjects();
    res.status(200);
    res.send(responseData);
}
