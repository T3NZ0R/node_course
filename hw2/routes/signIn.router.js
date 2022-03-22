const {Router} = require('express');

let users = require('../db/users');
let error = require('../db/error');

const signInRouter = Router();

signInRouter.get('/', (req, res) => {
    res.render('signIn');
});

signInRouter.post('/',({body}, res) => {

    const user = users.find(user => user.email === body.email && user.password === body.password);

    if (!user){
        error.output = error.err2;
        res.redirect('/error');
        return;
    }

    res.redirect(`/users/${user.id}`);
});

module.exports = signInRouter;