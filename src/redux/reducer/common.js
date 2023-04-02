const user = { name: '', email: '', isLogIn: false,id:'' }
export const UserData = (state = user, action) => {
    switch (action.type) {
        case 'LOG_IN':
            state = { name: action.payload.name, email: action.payload.email, isLogIn: true,id:action.payload.id }
            return state;
        default:
            state = { name: '', email: '', isLogIn: false };
            return state
    }
}
