exports.handler = async event => {
    console.log('CUST EVENT:', JSON.stringify(event, null, 2));
    return event;
};
