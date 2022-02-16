const fs = require('fs');
const path = require('path');

const {swapFunction} = require('./swapFunction');

let routes = {
    main: path.join(__dirname, 'main'),
    inPerson: path.join(__dirname, 'main', 'inPerson'),
    online: path.join(__dirname, 'main', 'online'),
    inPersonUsers: path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),
    onlineUsers: path.join(__dirname, 'main', 'online', 'onlineUsers.txt')
}

const onlineUsers = [
    {
        name: "Andrii",
        age: 22,
        city: "Lviv"
    },
    {
        name: "Stepan",
        age: 19,
        city: "Sambir"
    },
    {
        name: "Ivan",
        age: 28,
        city: "Stryi"
    }];

const inPersonUsers = [
    {
        name: "Bogdan",
        age: 25,
        city: "Drogobych"
    },
    {
        name: "Shtarko",
        age: 19,
        city: "Sambir"
    },
    {
        name: "Mykola",
        age: 15,
        city: "Truskavets"
    }];


fs.mkdir(routes.main, {recursive: true}, (err) => {
    if (err) {
        console.log(err);

    }
});

fs.mkdir(routes.inPerson, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }

    for (let i = 0; i < inPersonUsers.length; i++) {

        fs.appendFile(routes.inPersonUsers, `NAME: ${inPersonUsers[i].name}\n\nAGE: ${inPersonUsers[i].age}\n\nCITY: ${inPersonUsers[i].city}\n\n\n`, (err) => {
            if (err) {
                console.log(err);
            }
        });

    }

});

fs.mkdir(routes.online, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }

    for (let i = 0; i < onlineUsers.length; i++) {

        fs.appendFile(routes.onlineUsers, `NAME: ${onlineUsers[i].name}\n\nAGE: ${onlineUsers[i].age}\n\nCITY: ${onlineUsers[i].city}\n\n\n`, (err) => {
            if (err) {
                console.log(err);
            }
        });

    }

});

swapFunction(routes.onlineUsers, routes.inPersonUsers);