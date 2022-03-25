let users = require('../db/users');

module.exports = {

    isUserValid: (req, res, next) => {
        try {
            const {email, password} = req.body;

            if (!email || !password) {
                throw new Error('Login or password is not provided!');
            }

            if (password.length < 6) {
                throw new Error('Password is not valid!');
            }

            next();
        } catch (err) {
            console.log(err.message);
            res.status(400).send(err.message);
        }
    },

    isEmailAvailable: (req, res, next) => {

        try {

            let {email} = req.body;

            const user = users.find(user => user.email === email);

            if(!user){
                throw new Error('User not found');
            }

            next();
        }catch (err) {
            console.log(err.message);
            res.status(404).send(err.message);
        }
    }

};