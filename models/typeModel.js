//	{id?: string, name: string}

const { v4: uuidv4 } = require('uuid');

const types = [{id: '7', projectId: '1', name: 'Organise daily'}, {id: '8', projectId: '1', name: 'Organise planning'}, {id: '9', projectId: '2', name: 'Organise retro'}]


module.exports = class Type {
    constructor(projectId, name) {
        this.id = uuidv4();
        this.projectId = projectId;
        this.name = name;
    }

   static getAllByProjectId(projectId) {
        return types.filter(type => type.projectId === projectId);
    }
    static updateById(id, projectId, name) {
        const index = types.findIndex(el => el.id === id);
        types[index] = {...types[index], projectId, name: name};
        return types[index];
    }

    static delete(id) {
        const index = types.findIndex(el => el.id === id)
        types.splice(index, 1);
    }
    save() {
        types.push(this);
        return this;
    }
}

