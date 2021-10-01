import React from 'react'
import  Constants from '../constants'
import  {useForm} from '../hooks/useForm'

export const Form = () => {

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const {name, email, message} = values;

    const formData = JSON.stringify(values);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(Constants.API_ROUTE + 'mailer.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data));     
    }

    return (
        <form className='container mt-5'>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
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
                <label htmlFor="email" className="form-label">Email</label>
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
                <label htmlFor="comments" className="form-label">Mensaje</label>
                <textarea 
                    rows="4" 
                    className="form-control" 
                    name="message"
                    id="message"
                    value={ message } 
                    onChange={ handleInputChange }
                />
            </div>
            
            <button onClick={ handleSubmit } type="submit" className="btn">Enviar</button>
        </form>
    )
}
