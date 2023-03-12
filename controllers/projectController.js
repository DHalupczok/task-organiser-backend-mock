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
    Project.updateById(req.body.id, req.body.name, req.body.types)
    const responseData = Project.getAllProjects();
    res.status(200);
    res.send(responseData);
}

exports.deleteExistingProject = (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(404).send();
        return;
    }
    Project.delete(id);
    res.status(200);
    res.send();
}
