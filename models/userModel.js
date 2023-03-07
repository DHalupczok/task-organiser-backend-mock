//	{id?: string, name: string}

const {v4: uuidv4} = require('uuid');

const users = [{id: uuidv4, email: 'john.doe@app.com', name: 'John', surname: 'Doe', password: 'password'}, {
    id: uuidv4,
    email: 'josie.smith@app.com',
    name: 'Josie',
    surname: 'Smith',
    password: 'password'
}]


module.exports = class User {
    constructor(email, name, surname, password) {
        this.id = uuidv4();
        this.name = name;
        this.surname = surname;
        this.password = password;
    }

    static getAllTypes() {
        return users;
    }

    static updateTypeById(id, email, name, surname, password) {
        const index = users.findIndex(el => el.id === id);
       users[index] = {...users[index], email, name, surname, password};
    }

    static delete(id) {
        const index = users.findIndex(el => el.id === id)
        users.splice(index, 1);
    }

    save() {
        users.push(this);
    }
}

