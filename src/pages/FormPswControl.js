import { useState } from 'react';
import FormPsw from './FormPsw';
import { connect } from 'react-redux';
import {createPsw} from './actions';
import Message from '../common/Message';
import shortHash from 'short-hash';


function FormPswControl ({ onGeneratePress })  {
    const [password, setPsw] = useState({
        psw: "",
        hashPsw: ""
    });
    //Message status
    const [toast, setToast] = useState(false);
    const [status, setStatus] = useState("success");
    const [message, setMessage] = useState("");
        
    
    function handleChange ({ target }) {
        setPsw({...password, 
                psw: target.value})
    }   

    const handleClose = () => setToast(false);

    function handleValidation () {
        if  (password.psw === "") {
            setMessage("Cant be empty")
            setToast(true);
            setStatus("error");
            return false
        }
        else 
            return true;
    }

    function handleHash ()  {
        const hash = shortHash(password.psw);
        setPsw(password.hashPsw = hash);
        console.log(password);
    }


    function handleSubmit (event){
        event.preventDefault();
        if (handleValidation()){
            handleHash();
            onGeneratePress(password);
            setPsw({ ...password, psw: "" });
            setToast(true);
            setMessage("Password created");
            setStatus("success");
        }
    }

    return (
        <>
            <FormPsw onChange={handleChange} onSubmit={handleSubmit} password={password}/>
            <Message status={status} message={message} open={toast} handleClose={handleClose} />
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    onGeneratePress: psw => dispatch(createPsw(psw))
})

export default connect(null, mapDispatchToProps)(FormPswControl);