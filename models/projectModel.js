//{id?: string, name: string, types: IType[], tasks?: ITask[] }

const { v4: uuidv4 } = require('uuid');

const projectsData = [
    {id: '1', name: 'Project 1'},
    {id: '2', name: 'Project 2'},
    {id: '3', name: 'Work project as scrum master'},
    {id: '4', name: 'Work project App 1'}
]

module.exports = class Project {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
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

