import React, { useRef } from "react";
import '../../../styles/contact-us/ContactUsBody.css';
import emailjs from "@emailjs/browser";

export default function EnglishContactUsBody(){
    const form = userRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9q9qq72', 'template_4kpn7w7', form.current, 'hrdLjccQiPS2eGQhu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    };

    return(
        <div className="contact-us-body-container">
            <div className="contact-us-body-left">
                <div className="contact-us-body-left-text">
                    <div className="contact-us-body-title">
                        Have Questions? Want to Sign Up?
                    </div>
                    <div className="contact-us-body-subtitle">
                        Fill out the form below, email, or call and we will get back to you shortly!
                    </div>
                </div>
                <form className="contact-us-body-left-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-item">
                        <label for='name'>Name *</label>
                        <input type='text' name="user_name" id='name' class='form-input' placeholder="Full Name" required/>
                    </div>
                    <div className="form-item">
                        <label for='email'>Email *</label>
                        <input type='email' name="user_email" class='form-input' id='email' placeholder="example@youremail.com" required/>
                    </div>
                    <div className="form-item">
                        <label for='phone'>Phone Number</label>
                        <input type='tel' name="user_phone" id='phone'  class='form-input' placeholder="123-456-7890"/>
                    </div>
                    <div className="form-item">
                        <label for='classes'>Classes *</label>
                        <select id='classes' name="user_class" class='form-input' required>
                            <option value='Beginner Classes'>Beginner Classes 初階班</option>
                            <option value='Intermediate Classes'>Intermediate Classes 中階班</option>
                            <option value='Advanced Classes'>Advanced Classes 高階班</option>
                        </select>
                    </div>
                    <div className="form-item message-box">
                        <label for='message'>Message</label>
                        <textarea type='text' name="user_message" class='form-input' rows='7' id='message' placeholder="Write your message here..." />
                    </div>
                    <button type='submit' value="Send" className='contact-us-submit'>SUBMIT</button>
                </form>
            </div>
            <div className="contact-us-body-right">
                <div className='contact-us-body-right-item'>
                    <img />
                    <div className='contact-us-body-right-item-title'>Email</div>
                    <div>wilmao27@gmail.com</div>
                </div>
                <div className='contact-us-body-right-item'>
                    <img />
                    <div className='contact-us-body-right-item-title'>Phone</div>
                    <div>02 2533 8263</div>
                </div>
                <div className='contact-us-body-right-item'>
                    <img />
                    <div className='contact-us-body-right-item-title'>Address</div>
                    <div>No. 17, Lane 557, Mingshui Road <br/> 
                    Zhongshan District, Taipei City, 10491 </div>
                </div>
            </div>

        </div>
    )
}