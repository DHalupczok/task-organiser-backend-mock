const Type = require('../models/typeModel')

exports.getAllByProjectId = (req, res) => {
    const projectId = req.params.projectId
    const responseData = Type.getAllByProjectId(projectId);
    res.status(200);
    res.send(responseData);
}

exports.createNew = (req, res) => {
    const newType = new Type(req.body.projectId, req.body.name);
    const responseData = newType.save();
    res.status(201);
    res.send(responseData);
}

exports.editExisting = (req, res) => {
    const id = req.body.id;
    console.log("id", id)
    if (!id) {
        res.status(404).send()
        return
    }
    const updateAnswer = Type.updateById(id, req.body.projectId, req.body.name);
    if (!updateAnswer) {
        res.status(404).send()
        return;
    }
    res.status(200);
    res.send(updateAnswer);
}

exports.deleteExisting = (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(404).send();
        return;
    }

    Type.delete(id);
    res.status(200);
    res.send();
}
