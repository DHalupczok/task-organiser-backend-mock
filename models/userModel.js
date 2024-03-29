//{id?: string, email: string, name: string, surname: string, password?: string}
const { v4: uuidv4 } = require("uuid");

const data = [
  {
    id: "1",
    email: "q",
    name: "Piter",
    surname: "Doe",
    imageName: "pexels-photo-1366630.webp",
    password: "a",
  },
  {
    id: "2",
    email: "qwe",
    name: "Josie",
    surname: "Smith",
    imageName: "pexels-photo-1366630.webp",
    password: "password",
  },
];

module.exports = class User {
  constructor(email, name, surname, password, imageName) {
    this.id = uuidv4();
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.imageName = imageName;
  }

  static getUserByEmail(userEmail) {
    return data.find((user) => user.email === userEmail);
  }

  static getUserWithoutPassword(user) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      surname: user.surname,
    };
  }

  static getAll() {
    return data.map(this.getUserWithoutPassword);
  }

  static updateById(id, email, name, surname, password) {
    const index = data.findIndex((el) => el.id === id);
    data[index] = { ...data[index], email, name, surname, password };
    console.log(this.getUserWithoutPassword(data[index]));
    return this.getUserWithoutPassword(data[index]);
  }

  static delete(id) {
    const index = data.findIndex((el) => el.id === id);
    data.splice(index, 1);
    return index;
  }

  save() {
    data.push(this);
    return User.getUserWithoutPassword(this);
  }
};
