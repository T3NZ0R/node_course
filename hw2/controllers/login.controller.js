const users = require("../db/users");
const error = require("../db/error");

class LoginController {
    getLogin(req, res) {
        res.render('login');
    };

    postLogin({body}, res) {
        const userExist = users.some(user => user.email === body.email);

        if (userExist) {
            error.output = error.err1;
            res.redirect('/error');
            return;
        }

        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users');
    };
}

module.exports = new LoginController();