import React from "react";
import PopulateClassTime from "./PopulateClassTimes";
import '../../../styles/english/our-classes/EnglishOurClassesInfo.css';

export default function EnglishOurClassesInfo(){
    return(
        <div id='english-our-classes-class-times-container'>
            <div id='english-our-classes-class-times-title'>Class Times We Offer</div>
            <div id='english-our-classes-class-times-box'>
                <PopulateClassTime />
            </div>
        </div>
    )
}