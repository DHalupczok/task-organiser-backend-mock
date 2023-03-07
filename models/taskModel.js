//	{id?: string, title: string, startDate: Date, stopDate: Date, repeatability: ERepeatability, content: string }

const {v4: uuidv4} = require('uuid');

const tasks = [{
    id: uuidv4,
    title: 'Daily meeting',
    startDate: new Date(2023, 2, 1, 9, 0),
    stopDate: new Date(2023, 2, 28, 9, 30),
    repeatability: 1,
    content: 'daily of our team'
}, {
    id: uuidv4,
    title: 'Sprint review meeting',
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 2,
    content: 'Retro'
}, {
    id: uuidv4,
    title: 'Organise retro',
    startDate: new Date(2023, 2, 3, 9, 30),
    stopDate: new Date(2023, 2, 28, 10,),
    repeatability: 2,
    content: 'Retro of our team'
}]


module.exports = class Task {
    constructor(title, startDate, stopDate, repeatability, content) {
        this.id = uuidv4();
        this.title = title;
        this.startDate = startDate;
        this.stopDate = stopDate;
        this.repeatability = repeatability;
        this.content = content;
    }

    static getAllTasks() {
        return tasks;
    }

    static updateTaskById(id, title, startDate, stopDate, repeatability, content) {
        const index = tasks.findIndex(el => el.id === id);
        tasks[index] = {...tasks[index], title, startDate, stopDate, repeatability, content};
    }

    static delete(id) {
        const index = tasks.findIndex(el => el.id === id)
        tasks.splice(index, 1);
    }

    save() {
        tasks.push(this);
    }
}

