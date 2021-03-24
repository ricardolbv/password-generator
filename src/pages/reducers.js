import { CREATE_PSW } from './actions';

export const Passwords = (state = [], action) => {
    const { type, payload} = action;
    switch(type) {
        case CREATE_PSW: {
            const { psw } = payload;
            return state.concat(psw);
        }
        default :
            return state;
    }
}