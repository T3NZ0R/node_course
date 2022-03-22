const {Router} = require('express');

let users = require('../db/users');
let error = require('../db/error')

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('login');
});
loginRouter.post('/', ({body}, res) => {

    const userExist = users.some(user => user.email === body.email);

    if (userExist) {
        error.output = error.err1;
        res.redirect('/error');
        return;
    }

    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('/users');
});

module.exports = loginRouter;