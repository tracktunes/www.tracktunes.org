const validateEmail = require('validate_email');

exports.handler = async event => {
    // insert code to be executed by your lambda trigger
    const email = event.request.userAttributes.email;
    const dateString = new Date().toUTCString();
    if (validateEmail(email)) {
        // event.response.autoConfirmUser = true;
        // event.response.autoVerifyEmail = true;
        console.log(dateString + ' - email: ' + email);        
    } else {
        console.log(dateString + ' - bad: ' + email);
        throw Error('Email not valid');
    }
    return event;
};
