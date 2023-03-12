//{id?: string, name: string, types: IType[], tasks?: ITask[] }

const { v4: uuidv4 } = require('uuid');

const projectsData = [
    {id: '1', name: 'Project 1', types: [{id: '1', name: 'Type 1'}, {id: '2', name: 'Type 2'}, {id: '3', name: 'Type 3'}]},
    {id: '2', name: 'Project 2', types: [{id: '4', name: 'Type A'}, {id: '5', name: 'Type B'}, {id: '6', name: 'Type C'}]},
    {id: '3', name: 'Work project as scrum master', types: [{id: '7', name: 'Organise daily'}, {id: '8', name: 'Organise planning'}, {id: '9', name: 'Organise retro'}]},
    {id: '4', name: 'Work project App 1', types: [{id: '10', name: 'Coding task'}, {id: '11', name: 'Review of task'}, {id: '12', name: 'Take part in meeting'}]}
]

module.exports = class Project {
    constructor(name, types) {
        this.id = uuidv4();
        this.name = name;
        this.types = types;
    }

   static getAllProjects() {
        return projectsData;
    }
    static updateById(id, name, types) {
        const index = projectsData.findIndex(el => el.id === id);
        projectsData[index] = {...projectsData[index], name , types };
    }

    static delete(id) {
        const index = projectsData.findIndex(el => el.id === id)
         projectsData.splice(index, 1);
    }
    save() {
        projectsData.push(this);
    }
}

