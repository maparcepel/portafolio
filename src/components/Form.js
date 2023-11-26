import React, {useState} from 'react';
import  Constants from '../constants';
import  {useForm} from '../hooks/useForm';
import validator from 'validator';

export const Form = () => {

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const {name, email, message} = values;

    const formData = JSON.stringify(values);

    const [submitFeedback, setSubmitFeedback] = useState('');

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleSubmit =  (e) => {
        e.preventDefault();

        if(!name || !email || !message){
            setSubmitFeedback('Todos los campos son obligatorios.');
        }else if(!validator.isEmail(email)){
            setSubmitFeedback('Debes escribir un email válido.');
        }else{
            setSubmitFeedback('Enviando...');

            fetch(Constants.API_ROUTE + 'mailer.php', {
                method: 'POST',
                body: formData
            })
                .then(response => { 
                    if(response.ok) {
                        setSubmitFeedback('Tu mensaje se ha enviado correctamente.');
                        reset();
                    }else{
                        setSubmitFeedback('Ups. Algo ha fallado. Escríbeme a info@marcelmolina.net.');
                    }
                })
                .catch(error => setSubmitFeedback('Ups. Algo ha fallado. Puedes escribirme a info@marcelmolina.net.'));
                setButtonDisabled(true);
        }
    }   

    return (
        <form className='container mt-5'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre*</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={ name } 
                    onChange={ handleInputChange }
                    aria-describedby="emailHelp"
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email*</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={ email } 
                    onChange={ handleInputChange }
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="comments" className="form-label">Mensaje*</label>
                <textarea 
                    rows="4" 
                    className="form-control" 
                    name="message"
                    id="message"
                    value={ message } 
                    onChange={ handleInputChange }
                />
            </div>
            
            <button disabled={buttonDisabled} onClick={ handleSubmit } type="submit" className="btn">Enviar</button>
            <span className="submitFeedback">{ submitFeedback }</span>
        </form>
    )
}
