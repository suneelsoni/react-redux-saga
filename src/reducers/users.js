const users = (state = {status: undefined, user: []}, action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return Object.assign({}, state, {status: 'fetching'})
        case 'FETCH_USERS_SUCCESS':
            return Object.assign({}, state, {status: 'success', user: action.item})
        default:
            return state;
    }
}

export default users;