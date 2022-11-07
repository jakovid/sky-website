import React from "react";

export default function ClassTime({ classInfo }) {
    return(
        <div className="class-time" >
            <div className="class-days">{ classInfo.days }</div>
            <div className="class-duration">{ classInfo.start } - { classInfo.end }</div>
        </div>
    )
}