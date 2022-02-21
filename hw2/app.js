const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [
    {
        firstName: 'Vitalii',
        lastName: 'Shtark',
        age: 19,
        city: 'Lviv',
        email: 't3nz0r@gmail.com',
        password: '123456qwerty'
    },
    {
        firstName: 'Yura',
        lastName: 'Ttmr',
        age: 20,
        city: 'Lviv',
        email: 'ttmr@gmail.com',
        password: 'dfgi345'
    },
    {
        firstName: 'Metro',
        lastName: 'Postavchuk',
        age: 32,
        city: 'Hlivyshche',
        email: 'mcpetia@gmail.com',
        password: 'ookfro24765'
    },
    {
        firstName: 'Oleg',
        lastName: 'Fidyk',
        age: 21,
        city: 'Drogobych',
        email: 'fidyk@gmail.com',
        password: 'ordfiri45678'
    }
]


app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {

    const {email} = req.body;

    for (let i = 0; i < users.length; i++) {

        if (email === users[i].email) {
            res.render('notFound');
            break;
        }

        if (i === users.length - 1) {
            users.push(req.body);
            res.redirect('/users');
        }
    }
});

app.get('/users', (req, res) => {
    res.render('users', {users});
})

app.get('/users/userId=:userId', (req, res) => {
    const {userId} = req.params;
    res.render('userId', users[userId])
});

app.get('/users/userCity=:userCity&userAge=:userAge', (req, res) => {
    const {userCity, userAge} = req.params;

    let usersFilter = users.filter(user => user.city.toLowerCase().includes(userCity.toLowerCase()) && user.age.toString().includes(userAge));

    res.render('usersFilter', {usersFilter})
});

//============cw2==========================
app.get('/signIn', (req, res) => {
    res.render('signIn');
})

app.post('/signIn', (req, res) => {

    const {email, password} = req.body;

    for (let i = 0; i < users.length; i++) {

        if (email === users[i].email && password === users[i].password) {
            users.push(req.body);
            res.redirect('/userId', users[i]);
        }

        if (i === users.length - 1) {
            res.render('notFound');
            break;
        }
    }
});

//============cw2==========================

app.use((req, res) => {
    res.render('notFound')
});

app.listen(5200, () => {
    console.log('Server has started 5200');
});

