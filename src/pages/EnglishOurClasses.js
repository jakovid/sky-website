import React from "react";
import EnglishHeader from "../components/english/EnglishHeader";
import EnglishOurClassesHero from "../components/english/our-classes/EnglishOurClassesHero";
import EnglishOurClassesIntro from "../components/english/our-classes/EnglishOurClassesIntro";
import EnglishOurClassesClassTimes from "../components/english/our-classes/EnglishOurClassesClassTimes";
import EnglishFooter from "../components/english/EnglishFooter";


export default function EnglishOurClasses(){
    return(
        <div>
            <EnglishHeader />
            <EnglishOurClassesHero />
            <EnglishOurClassesIntro />
            <EnglishOurClassesClassTimes />
            <EnglishFooter />
        </div>
    )
}