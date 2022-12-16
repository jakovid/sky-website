import React from "react";
import '../../../styles/contact-us/ContactUsBody.css';

export default function ChineseContactUsBody(){
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
                <form className="contact-us-body-left-form">
                    <div className="form-item">
                        <label for='name'>名稱 *</label>
                        <input type='text' id='name' class='form-input' placeholder="全名" required/>
                    </div>
                    <div className="form-item">
                        <label for='email'>電子郵件 *</label>
                        <input type='email' class='form-input' id='email' placeholder="example@youremail.com" required/>
                    </div>
                    <div className="form-item">
                        <label for='phone'>電話號碼</label>
                        <input type='tel' id='phone'  class='form-input' placeholder="123-456-7890"/>
                    </div>
                    <div className="form-item">
                        <label for='classes'>班級 *</label>
                        <select id='classes' class='form-input' required>
                            <option value='beginner'>Beginner Classes 初階班</option>
                            <option value='intermediate'>Intermediate Classes 中階班</option>
                            <option value='advanced'>Advanced Classes 高階班</option>
                        </select>
                    </div>
                    <div className="form-item message-box">
                        <label for='message'>信息</label>
                        <textarea type='text' class='form-input' rows='7' id='message' placeholder="在這裡寫下您的訊息..." />
                    </div>
                    <button type='submit' className='contact-us-submit'>提交</button>
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