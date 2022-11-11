import React from "react";
import "../../../styles/home/HomeCTA.css";;

export default function EnglishHomeCTA() {
    return(
        <div id='english-home-cta-container'>
            <div id='english-home-cta-text'>
                New English Class January 2023. Register Now!
            </div>

            <div id='english-home-cta-email-wrapper'>

                <div id='english-home-cta-email-container'>
                    <input id='english-home-cta-email-input'  type='text' placeholder='Email' />
                    <button id='english-home-cta-submit-button' type='submit'>SUBMIT</button>
                </div>

                <div id='english-home-cta-email-subtext'>
                    We'll get in touch with you very soon. 
                    Thank you!
                </div>

            </div>
        </div>
    )
}