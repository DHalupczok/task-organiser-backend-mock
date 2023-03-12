//	{id?: string, title: string, startDate: Date, stopDate: Date, repeatability: ERepeatability, content: string }

const {v4: uuidv4} = require('uuid');

const tasks = [{
    id: '1',
    projectId: '1',
    title: 'Daily meeting',
    startDate: new Date(2023, 2, 1, 9, 0),
    stopDate: new Date(2023, 2, 28, 9, 30),
    repeatability: 1,
    content: 'daily of our team'
}, {
    id: '2',
    projectId: '1',
    title: 'Sprint review meeting',
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 2,
    content: 'Retro'
}, {
    id: '3',
    projectId: '2',
    title: 'Organise retro',
    startDate: new Date(2023, 2, 3, 9, 30),
    stopDate: new Date(2023, 2, 28, 10,),
    repeatability: 2,
    content: 'Retro of our team'
}]


module.exports = class Task {
    constructor(projectId, title, startDate, stopDate, repeatability, content) {
        this.id = uuidv4();
        this.projectId = projectId;
        this.title = title;
        this.startDate = startDate;
        this.stopDate = stopDate;
        this.repeatability = repeatability;
        this.content = content;
    }

    static getAllTasksByProjectId(id) {
        return tasks.filter(task => task.projectId == id);
    }

    static updateTaskById(id, projectId, title, startDate, stopDate, repeatability, content) {
        const index = tasks.findIndex(el => el.id === id);
        if(index === -1) return false;
        tasks[index] = {...tasks[index], title, startDate, stopDate, repeatability, content};
        return tasks[index]
    }

    static delete(id) {
        const index = tasks.findIndex(el => el.id === id)
        tasks.splice(index, 1);
    }

    static getTaskById(taskId) {
        return tasks.find(task => task.id === taskId)
    }

    save() {
        tasks.push(this);
    }
}

