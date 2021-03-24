import { useState } from 'react';
import FormPsw from './FormPsw';
import { connect } from 'react-redux';
import {createPsw} from './actions';

function FormPswControl ({ onGeneratePress })  {
    const [password, setPsw] = useState("");
    
    function handleChange ({ target }) {
        setPsw(target.value)
    }

    function handleSubmit (event){
        event.preventDefault();
        onGeneratePress(password);
        alert(password);
    }

    return (
        <FormPsw onChange={handleChange} onSubmit={handleSubmit} />
    )
}

const mapDispatchToProps = dispatch => ({
    onGeneratePress: psw => dispatch(createPsw(psw))
})

export default connect(null, mapDispatchToProps)(FormPswControl);