import React from "react";
import EnglishHeader from "../components/english/EnglishHeader";
import EnglishOurTeamHero from "../components/english/our-team/EnglishOurTeamHero";
import EnglishOurTeamInfo from "../components/english/our-team/EnglishOurTeamInfo";
import EnglishOurTeamTWTeachers from "../components/english/our-team/EnglishOurTeamTWTeachers";
import EnglishOurTeamEnglishTeachers from "../components/english/our-team/EnglishOurTeamEnglishTeachers";
import EnglishFooter from "../components/english/EnglishFooter";

export default function EnglishOurTeam() {
    return(
        <div>
            <EnglishHeader />
            <EnglishOurTeamHero />
            <EnglishOurTeamInfo />
            <EnglishOurTeamTWTeachers />
            <EnglishOurTeamEnglishTeachers />
            <EnglishFooter />
        </div>
    )
}