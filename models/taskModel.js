//	{id?: string, title: string, startDate: Date, stopDate: Date, repeatability: ERepeatability, content: string }

const { v4: uuidv4 } = require("uuid");

const tasks = [
  {
    id: "1",
    projectId: "1",
    typeId: "1",
    title: "Daily meeting",
    startDate: new Date(2023, 2, 1, 9, 0),
    stopDate: new Date(2023, 2, 28, 9, 30),
    repeatability: 1,
    content: "daily of our team",
    isDone: true,
  },
  {
    id: "2",
    projectId: "1",
    typeId: "1",
    title: "Sprint review meeting",
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 1,
    content: "Retro",
    isDone: false,
  },
  {
    id: "3",
    projectId: "1",
    typeId: "1",
    title: "Sprint review meeting",
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 1,
    content: "Retro",
    isDone: true,
  },
  {
    id: "4",
    projectId: "1",
    typeId: "1",
    title: "Sprint review meeting",
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 1,
    content: "Retro",
    isDone: true,
  },
  {
    id: "5",
    projectId: "1",
    typeId: "1",
    title: "Sprint review meeting",
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 2,
    content: "Retro",
    isDone: false,
  },
  {
    id: "6",
    projectId: "1",
    typeId: "1",
    title: "Sprint review meeting",
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 2,
    content: "Retro",
    isDone: false,
  },
  {
    id: "7",
    projectId: "1",
    typeId: "1",
    title: "Sprint review meeting",
    startDate: new Date(2023, 3, 3, 10, 0),
    stopDate: new Date(2023, 3, 31, 11, 30),
    repeatability: 2,
    content: "Retro",
    isDone: false,
  },
  {
    id: "8",
    projectId: "2",
    typeId: "1",
    title: "Organise retro",
    startDate: new Date(2023, 2, 3, 9, 30),
    stopDate: new Date(2023, 2, 28, 10),
    repeatability: 2,
    content: "Retro of our team",
    isDone: true,
  },
  {
    id: "9",
    projectId: "1",
    typeId: "1",
    title: "Daily meeting",
    startDate: new Date(2023, 2, 1, 9, 0),
    stopDate: new Date(2023, 8, 3, 21, 30),
    repeatability: 1,
    content: "daily of our team",
    isDone: true,
  },
];

module.exports = class Task {
  constructor(projectId, title, startDate, stopDate, repeatability, content) {
    this.id = uuidv4();
    this.projectId = projectId;
    this.title = title;
    this.startDate = startDate;
    this.stopDate = stopDate;
    this.repeatability = repeatability;
    this.content = content;
    this.isDone = false;
  }

  static getAllTasksByProjectId(id) {
    return tasks.filter((task) => task.projectId === id);
  }

  static updateTaskById(
    id,
    projectId,
    title,
    startDate,
    stopDate,
    repeatability,
    content,
    isDone
  ) {
    const index = tasks.findIndex((el) => el.id === id);
    if (index === -1) return false;
    tasks[index] = {
      ...tasks[index],
      projectId,
      title,
      startDate,
      stopDate,
      repeatability,
      content,
      isDone,
    };
    return tasks[index];
  }

  static delete(id) {
    const index = tasks.findIndex((el) => el.id === id);
    tasks.splice(index, 1);
  }

  static getTaskById(taskId) {
    return tasks.find((task) => task.id === taskId);
  }

  save() {
    tasks.push(this);
  }
};
