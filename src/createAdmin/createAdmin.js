const environmentAdmin = require('../environments/environmentAdmin');
const API_KEY = require('./config');
const fetch = require('node-fetch');

const sendRequest = async (url, body) => {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const createAdmin = async (enteredEmail, enteredPassword) => {
    try {
        const response = await sendRequest(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            },
        )
        if (!response.ok) throw new Error('Wrong login or password');

        const responseAdmin = await sendRequest(environmentAdmin.addAdmin, {
                email: enteredEmail,
                admin: true,
            },
        );
        if(!responseAdmin.ok) throw new Error('Something went wrong');

        console.log('Administrator added successfully');
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = { createAdmin };