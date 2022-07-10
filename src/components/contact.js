import React from 'react'
import '../style.css'

function Contact() {
    return (
        <section className='text-center' id='contact-form'>
            <h1 id='contact-me-text'>Contact me</h1>
            <form id='contact-form' className='fade-in-text'>
                <div className='col-md-3'>
                    <label className='form-label'>Name:</label>
                    <input type="text" class='form-control' name="name" defaultValue='enter name here' />
                </div>
                <div className='col-md-3'>
                    <label className='form-label'>Email address:</label>
                    <input type="email" class='form-control' name="email" defaultValue='enter email here' />
                </div>
                <div className='col-md-3'>
                    <label className='form-label'>Message:</label>
                    <textarea name="message" class='form-control' rows="5" defaultValue='enter message here' />
                </div>
                <button data-testid="button" type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </section>
  );
}

export default Contact