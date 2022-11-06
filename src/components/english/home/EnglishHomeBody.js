import React from "react";
import ClassPic1 from "../../../images/ClassPic1.webp";
import ClassPic2 from "../../../images/ClassPic2.webp";
import ClassPic3 from "../../../images/ClassPic3.webp";
import "../../../styles/english/home/EnglishHomeBody.css";

export default function EnglishHomeBody() {
    return(
        <div id="english-home-body-container">
            <div className='english-home-body-item'>
                <img className='english-home-body-image' src={ClassPic1} />
                <div className='english-home-body-title' >
                    Taught by Qualified Native English Speakers
                </div>
                <div className='english-home-body-text'>
                We believe that happy teachers are more productive and creative. 
                We want our teachers to want to come and teach. 
                Our teachers bring a high-energy approach to the classroom every 
                day to make classes fly by. Every class is a unique experience.
                </div>
            </div>

            <div className='english-home-body-item'>
                <img className='english-home-body-image' src={ClassPic2} />
                <div className='english-home-body-title' >
                    Engaging Academic Environment
                </div>
                <div className='english-home-body-text'>
                For 14 years, we've been about having fun while learning English. 
                In order to have fun while learning, kids need to feel safe, 
                confident and able to make a mistake and not worry about it. 
                Our classes are small with multi-media in all of them.
                </div>
            </div>

            <div className='english-home-body-item'>
                <img className='english-home-body-image' src={ClassPic3} />
                <div className='english-home-body-title' >
                    Custom, Relevant Class Content
                </div>
                <div className='english-home-body-text'>
                Back in 2008, we believed that the English books used in Taiwanese 
                classrooms were outdated, irrelevant and boring. 
                So, we decided to create our own Sky books. (Phonics, Reading, Grammar)
                </div>
            </div>

        </div>
    )
}