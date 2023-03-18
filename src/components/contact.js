// import { React, useState }  from 'react'
// import '../style.css'
// import { Parallax } from 'react-parallax'

// function Contact() {

//     //initial form state
//     const [formState, setformState] = useState({ 
//         name: '',
//         email: '',
//         message: ''
//     })
//     //reset form state so we can target the inputs that we want.
//     const {name, email, message} = formState

//     //error message state
//     const [errorMessage, seterrorMessage] = useState('')

//     //handle change
//     //if nothing in imput, set error message.
//     const handleChange = (e) => {
//         if (!e.target.value.length) {
//             seterrorMessage(`${e.target.name} is required.`)
//         } else {
//             seterrorMessage('')
//         }
//         setformState({...formState, [e.target.name]: e.target.value})
//     }

//     //handle form submit
//     const handleFormSubmit = (e) => {
//         e.preventDefault()
//         if (!errorMessage) {
//             console.log('success!')
//         }
//     }

//     return (

        

//         <section className='text-center page-content-short' id='contact-form'>

//         <Parallax blur={0} bgImage="https://img.freepik.com/premium-photo/white-grey-marble-texture-background-natural-pattern-with-high-resolution-tiles-luxury-stone-floor-seamless-glitter-interior-exterior_38607-418.jpg?w=2000" bgImageAlt="marble" strength={500}>
            
//             <h1 id='contact-me-text' className='pt-3'>Contact me</h1>
        
//             <div id='form'>
//                 <form onSubmit={handleFormSubmit} className='fade-in-text'>
//                     <div className='pb-3'>
//                         <label className='form-label'>Name:</label>
//                         <input type="text" className='form-control' name="name" defaultValue={name} onBlur={handleChange} />
//                     </div>
//                     <div className='pb-3'>
//                         <label className='form-label'>Email address:</label>
//                         <input type="email" className='form-control' name="email" defaultValue={email} onBlur={handleChange} />
//                     </div>
//                     <div>
//                         <label className='form-label'>Message:</label>
//                         <textarea name="message" className='form-control' rows="5" defaultValue={message} onBlur={handleChange} />
//                     </div>
//                     <div id='error-message' className='p-3'>
//                         {errorMessage && (
//                             <h3>{errorMessage}</h3>
//                         )}
//                     </div>
//                     <button data-testid="button" type="submit" className='btn m-3' id='submitBtn'>Submit</button>
//                 </form>
//             </div>

//             <div style={{ height: '175px' }} />
//             </Parallax>
//         </section>
//   );
// }

// export default Contact