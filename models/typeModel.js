//	{id?: string, name: string}

const { v4: uuidv4 } = require('uuid');

const types = [{id: '7', name: 'Organise daily'}, {id: '8', name: 'Organise planning'}, {id: '9', name: 'Organise retro'}]


module.exports = class Type {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
    }

   static getAllTypes() {
        return types;
    }
    static updateTypeById(id, newName) {
        const index = types.findIndex(el => el.id === id);
        types[index] = {...types[index], name: newName};
    }

    static delete(id) {
        const index = types.findIndex(el => el.id === id)
        types.splice(index, 1);
    }
    save() {
        types.push(this);
    }
}

