const isLogIn=false;
export const LogIn=(state=isLogIn,action)=>{
    switch (action.type) {
        case 'LOG_IN':
            state=true;
            return true;
        default:
            state=false;
            return false;
    }
}
