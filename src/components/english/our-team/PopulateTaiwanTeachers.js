import { TaiwanTeachers } from "../../../data/TaiwanTeachers";
import React from "react";
import TaiwanTeacher from "./TaiwanTeacher";

export default function PopulateTaiwanTeachers() {
    return(
        TaiwanTeachers.map(teacher => {
            return <TaiwanTeacher key={teacher.id} teacher={teacher} />
        })
    )
}