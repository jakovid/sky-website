import React from "react";
import '../../../styles/contact-us/ContactUsBody.css';

export default function EnglishContactUsBody(){
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
                <form className="contact-us-body-left-form">
                    <div className="form-item">
                        <label for='name'>Name *</label>
                        <input type='text' id='name' placeholder="Full Name" required/>
                    </div>
                    <div className="form-item">
                        <label for='email'>Email *</label>
                        <input type='email' id='email' placeholder="example@youremail.com" required/>
                    </div>
                    <div className="form-item">
                        <label for='phone'>Phone Number</label>
                        <input type='tel' id='phone' placeholder="123-456-7890"/>
                    </div>
                    <div className="form-item">
                        <label for='classes'>Classes *</label>
                        <select id='classes' required>
                            <option value='beginner'>Beginner Classes 初階班</option>
                            <option value='intermediate'>Intermediate Classes 中階班</option>
                            <option value='advanced'>Advanced Classes 高階班</option>
                        </select>
                    </div>
                    <div className="form-item message-box">
                        <label for='message'>Message</label>
                        <textarea type='text' rows='7' id='message' placeholder="Write your message here..." />
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
            <div className="contact-us-body-right">
                <div className='ontact-us-body-right-email'>
                    <img />
                    <div>Email</div>
                    <div>wilmao27@gmail.com</div>
                </div>
                <div className='contact-us-right-phone'>
                    <img />
                    <div>Phone</div>
                    <div>02 2533 8263</div>
                </div>
                <div className='conact-us-right-address'>
                    <img />
                    <div>Address</div>
                    <div>No. 17, Lane 557, Mingshui Road <br/> 
                    Zhongshan District, Taipei City, 10491 </div>
                </div>
            </div>

        </div>
    )
}