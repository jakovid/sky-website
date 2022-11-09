import React from "react";
import PopulateClassTime from "./PopulateClassTimes";
import PopulateSemesters from "./PopulateSemesters";
import '../../../styles/english/our-classes/EnglishOurClassesInfo.css';

export default function EnglishOurClassesInfo(){
    return(
        <div id='english-our-classes-class-times-container'>
            <div id='english-our-classes-title'>Class Times We Offer</div>
            <div id='english-our-classes-box'>
                <PopulateClassTime />
            </div>
            <div id='english-our-classes-title'>Semester Length</div>
            <div id='english-our-classes-box'>
                <PopulateSemesters />
            </div>
        </div>
    )
}