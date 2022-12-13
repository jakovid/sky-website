import React from "react";

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
                    <label for='name'>Name *</label>
                    <input type='text' id='name' placeholder="Full Name" required/>
                    <label for='email'>Email *</label>
                    <input type='email' id='email' placeholder="example@youremail.com" required/>
                    <label for='phone'>Phone Number</label>
                    <input type='tel' id='phone' placeholder="123-456-7890"/>
                    <label for='classes'>Classes *</label>
                    <select id='classes' required>
                        <option value='beginner'>Beginner Classes 初階班</option>
                        <option value='intermediate'>Intermediate Classes 中階班</option>
                        <option value='advanced'>Advanced Classes 高階班</option>
                    </select>
                    <label for='message'>Message</label>
                    <input type='text' placeholder="Write your message here..." />
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