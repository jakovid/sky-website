import React from "react";

export default function TaiwanTeacher({ teacher }) {
    return (
        <div className='taiwan-teacher' >
            <img className='taiwan-teacher-picture' src={teacher.picture} />
            <div className='taiwan-teacher-name' >{teacher.name}</div>
        </div>
    )
}