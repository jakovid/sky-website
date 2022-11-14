import React from "react";
import ChineseHeader from '../components/chinese/ChineseHeader';
import ChineseOurTeamHero from "../components/chinese/our-team/ChineseOurTeamHero";
import ChineseOurTeamInfo from "../components/chinese/our-team/ChineseOurTeamInfo";
import ChineseOurTeamTWTeachers from "../components/chinese/our-team/ChineseOurTeamTWTeachers";
import ChineseOurTeamEnglishTeachers from "../components/chinese/our-team/ChineseOurTeamEnglishTeachers";
import EnglishFooter from "../components/english/EnglishFooter";

export default function ChineseOurTeam() {
    return(
        <div>
            <ChineseHeader />
            <ChineseOurTeamHero />
            <ChineseOurTeamInfo />
            <ChineseOurTeamTWTeachers />
            <ChineseOurTeamEnglishTeachers />
            <EnglishFooter />
        </div>
    )
}