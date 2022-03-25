const users = require("../db/users");
const error = require("../db/error");

class SignInController {
    getSignIn(req, res) {
        res.render('signIn');
    };

    postSignIn({body, res}) {
        const user = users.find(user => user.email === body.email && user.password === body.password);

        if (!user) {
            error.output = error.err2;
            res.redirect('/error');
            return;
        }

        res.redirect(`/users/${user.id}`);
    };
}

module.exports = new SignInController();