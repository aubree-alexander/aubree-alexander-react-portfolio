import { React, useState }  from 'react'
import '../style.css'

//AA - in section classname below - tried d-flex justify-content-center
function Contact() {

    //initial form state
    const [formState, setformState] = useState({ 
        name: '',
        email: '',
        message: ''
    })
    //reset form state so we can target the inputs that we want.
    //create destructured vars with which we can pass vals into use setformstate on 27
    const {name, email, message} = formState

    //error message state
    const [errorMessage, seterrorMessage] = useState('')

    //handle change
    //if nothing in imput, set error message.
    //e.target.name is the input that we're typing into.
    //setformstate - first part says change whole form state, second part targets the name attribute on each input and grabs input's value when you type into it.
    const handleChange = (e) => {
        if (!e.target.value.length) {
            seterrorMessage(`${e.target.name} is required.`)
        } else {
            seterrorMessage('')
        }
        setformState({...formState, [e.target.name]: e.target.value})
    }

    //handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!errorMessage) {
            console.log('success!')
        }
    }

    return (
        <section className='text-center' id='contact-form'>
            
            <h1 id='contact-me-text'>Contact me</h1>
        
            <div id='form'>
                <form onSubmit={handleFormSubmit} className='fade-in-text'>
                    <div>
                        <label className='form-label'>Name:</label>
                        <input type="text" class='form-control' name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label className='form-label'>Email address:</label>
                        <input type="email" class='form-control' name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label className='form-label'>Message:</label>
                        <textarea name="message" class='form-control' rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    <div id='error-message'>
                        {errorMessage && (
                            <h3>{errorMessage}</h3>
                        )}
                    </div>
                    <button data-testid="button" type="submit" className='btn m-3' id='submitBtn'>Submit</button>
                </form>
            </div>
        </section>
  );
}

export default Contact