exports.handler = async event => {
    // insert code to be executed by your lambda trigger
    console.log('here we go! ' + JSON.stringify(event, null, 2));
};
