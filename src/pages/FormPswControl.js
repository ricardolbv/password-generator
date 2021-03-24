import { useState } from 'react';
import FormPsw from './FormPsw';

const FormPswControl = () => {
    const [password, setPsw] = useState("");
    
    function handleChange ({ target }) {
        setPsw(target.value)
    }

    function handleSubmit (event){
        event.preventDefault();
        alert(password);
    }

    return (
        <FormPsw onChange={handleChange} onSubmit={handleSubmit} />
    )
}

export default FormPswControl;