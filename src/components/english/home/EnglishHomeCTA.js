import React from "react";
import "../../../styles/home/HomeCTA.css";;

export default function EnglishHomeCTA() {
    return(
        <div id='home-cta-container'>
            <div id='home-cta-text'>
                New English Classes January 2023. <br/> Register Now!
            </div>

            <div id='home-cta-email-wrapper'>

                <div id='home-cta-email-container'>
                    <input id='home-cta-email-input'  type='text' placeholder='Email' />
                    <button id='home-cta-submit-button' type='submit'>SUBMIT</button>
                </div>

                <div id='home-cta-email-subtext'>
                    We'll get in touch with you very soon. 
                    Thank you!
                </div>

            </div>
        </div>
    )
}