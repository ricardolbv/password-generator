import { useState } from 'react';
import FormPsw from './FormPsw';
import { connect } from 'react-redux';
import {createPsw} from './actions';
import Message from '../common/Message';


function FormPswControl ({ onGeneratePress })  {
    const [password, setPsw] = useState("");
    //Message status
    const [toast, setToast] = useState(false);
    const [status, setStatus] = useState("success");
    const [message, setMessage] = useState("");
    
    
    function handleChange ({ target }) {
        setPsw(target.value)
    }

    const handleClose = () => setToast(false);

    function handleValidation () {
        if  (password === "") {
            setMessage("Cant be empty")
            setToast(true);
            setStatus("error");
            return false
        }
        else 
            return true;
    }


    function handleSubmit (event){
        event.preventDefault();
        if (handleValidation()){
            onGeneratePress(password);
            setPsw("");
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