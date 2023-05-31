import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactusform.css';

function ContactUsForm() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uu0vnae', 'template_toaq6lk', form.current, 'svBImrYSkBMokP5jF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
        <div id="ContactForm">
           <div id='form'>
                <h1>Send a Message</h1>
                <p>We’re here to help with your questions or feedback.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <fieldset>
                        <legend>Name</legend>
                       
                        <div>
                            <input type="text" id="fname" name="fname" className="ftextbox" required/>
                            <label for="fname" className='name' >First</label>
                        </div>

                        <div>
                            <input type="text" id="lname" name="lname" className="ftextbox" required/>
                            <label for="lname" className='name'>Last</label>
                        </div>

                    </fieldset>
                    
                    <fieldset>

                        <div>
                            <label for="email" className='email-phone'>E-mail</label>
                            <input type="text" id='email' naem="email" className="ftextbox" required/>
                        </div>
                        
                        <div>
                            <label for="phone" className='email-phone'>Phone number</label>
                            <input type="text" id='phone' name="phone" className="ftextbox"/>
                        </div>

                    </fieldset>
                    
                    <fieldset className="mass-box">
                        
                        <label for="contant" required>Massage</label>
                        <input type="textarea" rows={4} cols={50} id='contant' name="message" className="ftextarea"/>

                    </fieldset>
                    <br />
                    <input type="submit" value="-> Submit" id='contact-submit'/>
                </form>
           </div>

           <div id='contact'>
            <div id='call-us' className='contact-section'>
                <h1>Call us</h1>
                <p>We’re here to help with your questions We’re here to help with your.</p>
                <ul>
                    <li>
                        +218 94 313 25 45
                    </li>
                </ul>
            </div>
            <div id='social-media' className='contact-section'>
                <h1>Social Media</h1>
                <p>We’re here to help with your questions We’re here to help with your.</p>
                <ul>
                    <li>Facebook</li>
                    <li>Instgram</li>
                    <li>Linkedin</li>
                </ul>
            </div>
            <div id='community' className='contact-section'>
                <h1>Community</h1>
                <p>We’re here to help with your questions We’re here to help with your.</p>
            </div>
           </div>
        </div>
    )
}

export default ContactUsForm;