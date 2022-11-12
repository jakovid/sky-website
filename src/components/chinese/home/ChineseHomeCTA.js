import React from "react";
import "../../../styles/home/HomeCTA.css";;

export default function ChineseHomeCTA() {
    return(
        <div id='home-cta-container'>
            <div id='home-cta-text'>
                2023年1月 <br />
                開始最新課程！
            </div>

            <div id='home-cta-email-wrapper'>

                <div id='home-cta-email-container'>
                    <input id='home-cta-email-input'  type='text' placeholder='電子郵件' />
                    <button id='home-cta-submit-button' type='submit'>提交</button>
                </div>

                <div id='home-cta-email-subtext'>
                    我們會盡快和您聯繫，謝謝!
                </div>

            </div>
        </div>
    )
}