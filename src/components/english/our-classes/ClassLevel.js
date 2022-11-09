import React from "react";

export default function ClassLevel({ classLevelInfo }) {
    return(
        <div>
            <img src={classLevelInfo.picture} />
            <div>
                <div>{ classLevelInfo.name }</div>
                <div>{ classLevelInfo.info }</div>
            </div>
        </div>
    )
}