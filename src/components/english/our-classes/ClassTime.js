import React from "react";

export default function ClassTime({ classInfo }) {
    return(
        <div className="class-info-item" >
            <div className="class-info-item-title">{ classInfo.days }</div>
            <div className="class-info-item-text">{ classInfo.start } - { classInfo.end }</div>
        </div>
    )
}