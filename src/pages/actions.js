export const CREATE_PSW = "CREATE_PSW";
export const createPsw = psw => ({
    type: CREATE_PSW,
    payload: { psw }
})