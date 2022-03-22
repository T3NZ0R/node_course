const {Router} = require('express');

let users = require('../db/users');
let error = require('../db/error');

const userRouter = Router();

userRouter.get('/', ({query}, res) => {


    if (Object.keys(query).length) {
        let usersArray = [...users];

        if (query.city) {
            usersArray = usersArray.filter(user => user.city === query.city);
        }

        if (query.age) {
            usersArray = usersArray.filter(user => user.age === query.age);
        }

        res.render('users', {users: usersArray});
        return;
    }

    res.render('users', {users});
});

userRouter.get('/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);

    if (!user) {
        error.output = error.err3;
        res.redirect('/error');
        return;
    }

    res.render('userId', { user });
});

userRouter.post('/:userId', ({ params }, res) => {
    users = users.filter(user => user.id !== +params.userId);

    res.redirect('/:userId');
});

module.exports = userRouter;