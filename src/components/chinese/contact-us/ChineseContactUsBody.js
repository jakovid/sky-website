import React, { useRef } from "react";
import '../../../styles/contact-us/ContactUsBody.css';
import emailjs from "@emailjs/browser";

export default function ChineseContactUsBody(){
    const form = useRef();

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
                        歡迎詢問任何問題．立即報名．
                    </div>
                    <div className="contact-us-body-subtitle">
                        填寫下面的表格、發送電子郵件或致電，我們會盡快回复您！
                    </div>
                </div>
                <form className="contact-us-body-left-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-item">
                        <label htmlFor='name'>名稱 *</label>
                        <input type='text' name="user_name" id='name' className='form-input' placeholder="全名" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor='email'>電子郵件 *</label>
                        <input type='email' name="user_email" className='form-input' id='email' placeholder="example@youremail.com" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor='phone'>電話號碼</label>
                        <input type='tel' name="user_phone" id='phone'  className='form-input' placeholder="123-456-7890"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor='classes'>班級 *</label>
                        <select id='classes' name="user_class" className='form-input' required>
                            <option value='Beginner Classes'>Beginner Classes 初階班</option>
                            <option value='Intermediate Classes'>Intermediate Classes 中階班</option>
                            <option value='Advance Classes'>Advanced Classes 高階班</option>
                        </select>
                    </div>
                    <div className="form-item message-box">
                        <label htmlFor='message' >信息</label>
                        <textarea type='text' name="user_message" className='form-input' rows='7' id='message' placeholder="在這裡寫下您的訊息..." />
                    </div>
                    <button type='submit' value="Send" className='contact-us-submit'>提交</button>
                </form>
            </div>
            <div className="contact-us-body-right">
                <div className='contact-us-body-right-item'>
                    <img />
                    <div className='contact-us-body-right-item-title'>電子郵件</div>
                    <div>wilmao27@gmail.com</div>
                </div>
                <div className='contact-us-body-right-item'>
                    <img />
                    <div className='contact-us-body-right-item-title'>電話</div>
                    <div>02 2533 8263</div>
                </div>
                <div className='contact-us-body-right-item'>
                    <img />
                    <div className='contact-us-body-right-item-title'>地址</div>
                    <div>台北市中山區明水路557弄17號，10491</div>
                </div>
            </div>

        </div>
    )
}