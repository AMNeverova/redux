let initialState = {
    users: [],
    usersRendered: []
}

const getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const usersReducer = function (state = initialState, action) {
    let max = state.users.length;
    switch (action.type) {
        case 'REFRESH_USERS':
            let stateCopy = { ...state };
            stateCopy.usersRendered = state.usersRendered.map(user => {
                return { ...state.users[getRandomInt(0, max)] }
            })
            return stateCopy;
        case 'DELETE_USER':
            return {
                ...state, usersRendered: state.usersRendered.map(user => {
                    if (action.id === user.id) {
                        return { ...state.users[getRandomInt(0, max)] }
                    }
                    return user
                })
            }
        case 'TOGGLE_TRASHBIN':
            return {
                ...state, usersRendered: state.usersRendered.map( user => {
                    if (action.id === user.id) {
                        user.trashbinIsShown = !user.trashbinIsShown;
                        return user;
                    }
                    return user
                })
            }
            case 'SET_USERS_TO_RENDER':
                let newState = {...state};
                newState.users = action.data;
                for (let i = 0; i < 3; i++) {
                    let num = getRandomInt(0, newState.users.length)
                    newState.usersRendered.push({...newState.users[num]})
                }
                return newState
            default:
                return state

    }
}

export default usersReducer;