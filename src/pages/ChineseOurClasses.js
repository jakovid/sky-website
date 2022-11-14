import React from "react";
import ChineseHeader from '../components/chinese/ChineseHeader';
import ChineseOurClassesHero from "../components/chinese/our-classes/ChineseOurClassesHero";
import ChineseOurClassesIntro from "../components/chinese/our-classes/ChineseOurClassesIntro";
import ChineseOurClassesInfo from "../components/chinese/our-classes/ChineseOurClassesInfo";
import ChineseOurClassesLevels from "../components/chinese/our-classes/ChineseOurClassesLevels";
import EnglishFooter from "../components/english/EnglishFooter";

export default function ChineseOurClasses(){
    return(
        <div>
            <ChineseHeader />
            <ChineseOurClassesHero />
            <ChineseOurClassesIntro />
            <ChineseOurClassesInfo />
            <ChineseOurClassesLevels />
            <EnglishFooter />
        </div>
    )
}