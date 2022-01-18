const sendRequestLoginDetails = async (url, enteredEmail, enteredPassword, token, enteredAdmin) => {
    return await fetch(url, {
        method: 'POST',
        body:JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: token,
            admin: enteredAdmin,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export default sendRequestLoginDetails;