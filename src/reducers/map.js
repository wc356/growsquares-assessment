
//Just a backbone for you to work off of
export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD':
            return state;
        case 'DELETE':
            return state;
        default:
            return state;
    };
};