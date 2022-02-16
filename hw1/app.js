const fs = require('fs');
const path = require('path');
const os = require('os');

// fs.mkdir(path.join(__dirname, 'main'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

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

// for (let i = 0; i < inPersonUsers.length; i++){
//
//     fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'),`NAME: ${inPersonUsers[i].name}\n\nAGE: ${inPersonUsers[i].age}\n\nCITY: ${inPersonUsers[i].city}\n\n\n` , (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
//
// }
//
// for (let i = 0; i < onlineUsers.length; i++){
//
//     fs.appendFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),`NAME: ${onlineUsers[i].name}\n\nAGE: ${onlineUsers[i].age}\n\nCITY: ${onlineUsers[i].city}\n\n\n` , (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
//
// }

const {swapFunction} = require('./swapFunction');

swapFunction(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'));