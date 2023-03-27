const user = { name: '', email: '', isLogIn: false }
export const UserData = (state = user, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'LOG_IN':
            state = { name: action.payload.name, email: action.payload.email, isLogIn: true }
            return state;
        default:
            state = { name: '', email: '', isLogIn: false };
            return state
    }
}
