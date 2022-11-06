import React from "react";

export default function EnglishTeacher({ teacher }) {
    return(
        <div className='english-teacher' >
            <img className="english-teacher-picture" src={ teacher.picture } />
            <div className="english-teacher-info-box">
                <div className="english-teacher-name">{ teacher.name }</div>
                <img className="english-teacher-flag" src={ teacher.flag } />
            </div>
            <div className="english-teacher-bio">{ teacher.bio }</div>
        </div>
    )
}