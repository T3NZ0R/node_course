let users = require('../db/users');

module.exports = {

    isDatAvailable: (req, res, next) => {


        try {
            const {firstName, lastName, age, city, email, password} = req.body;

            if (!firstName) {
                throw new Error('First name is not provided');
            }
            if (!lastName) {
                throw new Error('Last name is not provided');
            }
            if (!age) {
                throw new Error('Age is not provided');
            }
            if (!city) {
                throw new Error('City is not provided');
            }
            if (!email) {
                throw new Error('Email is not provided');
            }
            if (!password) {
                throw new Error('Password is not provided');
            }

            next();
        } catch (err) {
            console.log(err.message);
            res.status(400).send(err.message);
        }


    },

    isEmailRegistered: (req, res, next) => {

        try {
            const {email} = req.body;

            const user = users.find(user => user.email === email);

            if (user) {
                throw new Error('Email is already registered');
            }

            next();
        } catch (err) {
            console.log(err.message);
            res.status(400).send(err.message);
        }

    },

    isPasswordValid: (req, res, next) => {

        try {
            const {password} = req.body;

            if (password.length < 6) {
                throw new Error('Password is not valid!!!');
            }

            next();
        } catch (err) {
            console.log(err.message);
            res.status(400).send(err.message);
        }

    }




};