import React from "react";
import EnglishHeader from "../components/english/EnglishHeader";
import EnglishOurClassesHero from "../components/english/our-classes/EnglishOurClassesHero";
import EnglishOurClassesIntro from "../components/english/our-classes/EnglishOurClassesIntro";
import EnglishOurClassesInfo from "../components/english/our-classes/EnglishOurClassesInfo";
import EnglishOurClassesLevels from "../components/english/our-classes/EnglishOurClassesLevels";
import EnglishFooter from "../components/english/EnglishFooter";


export default function EnglishOurClasses(){
    return(
        <div>
            <EnglishHeader />
            <EnglishOurClassesHero />
            <EnglishOurClassesIntro />
            <EnglishOurClassesInfo />
            <EnglishOurClassesLevels />
            <EnglishFooter />
        </div>
    )
}