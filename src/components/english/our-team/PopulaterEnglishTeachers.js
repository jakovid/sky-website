import { EnglishTeachers } from "../../../data/EnglishTeachers";
import React from "react";
import EnglishTeacher from "./EnglishTeacher";

export default function PopulateEnglishTeachers() {
    return(
        EnglishTeachers.map(teacher => {
            return <EnglishTeacher key={teacher.id} teacher={teacher} />
        })
    )
}