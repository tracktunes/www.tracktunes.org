exports.handler = (event, context, callback) => {
    // insert code to be executed by your lambda trigger
    console.log('EV', JSON.stringify(event, null, 2));
    callback(null, event);
};
