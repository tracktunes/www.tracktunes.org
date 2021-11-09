const validateEmail = require('validate_email');

exports.handler = async event => {
    const email = event.request.userAttributes.email;
    if (validateEmail(email)) {
        // event.response.autoConfirmUser = true;
        // event.response.autoVerifyEmail = true;
        console.log('email: ' + email);        
    } else {
        throw Error('bad email: ' + email);
    }
    return event;
};
