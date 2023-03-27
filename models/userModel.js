//{id?: string, email: string, name: string, surname: string, password?: string}
const {v4: uuidv4} = require('uuid');

const data = [{id: '1', email: 'john.doe@app.com', name: 'Piter', surname: 'Doe', password: 'password'}, {
    id: '2', email: 'josie.smith@app.com', name: 'Josie', surname: 'Smith', password: 'password'
}]


module.exports = class User {


    constructor(email, name, surname, password) {
        this.id = uuidv4();
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.password = password;
    }

    static getUserByEmail(userEmail) {
        return data.find(user => user.email === userEmail)
    }

    static getUserWithoutPassword(user) {
        return {id: user.id, email: user.email, name: user.name, surname: user.surname}
    }

    static getAll() {
        return data.map(this.getUserWithoutPassword);
    }

    static updateById(id, email, name, surname, password) {
        const index = data.findIndex(el => el.id === id);
       data[index] = {...data[index], email, name, surname, password};
       console.log(this.getUserWithoutPassword(data[index]))
       return this.getUserWithoutPassword(data[index]);
    }

    static delete(id) {
        const index = data.findIndex(el => el.id === id)
        data.splice(index, 1);
        return index;
    }

    save() {
        data.push(this);
        return User.getUserWithoutPassword(this);
    }
}

