exports.handler = async event => {
    console.log('CUST EVENT:', JSON.stringify(event, null, 2));

    // Confirm the user
    event.response.autoConfirmUser = true;

    // Set the email as verified
    // Set the email as verified if it is in the request
    if (event.request.userAttributes.hasOwnProperty('email')) {
        event.response.autoVerifyEmail = true;
    }

    return event;
}
