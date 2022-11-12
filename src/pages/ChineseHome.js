import React from "react";
import ChineseHeader from "../components/chinese/ChineseHeader.js";
import ChineseHeroHome from "../components/chinese/home/ChineseHomeHero.js";
import ChineseHomeBody from "../components/chinese/home/ChineseHomeBody.js";
import ChineseHomeCTA from "../components/chinese/home/ChineseHomeCTA.js";
import ChineseHomeLowerHero from "../components/chinese/home/ChineseHomeLowerHero.js";
import EnglishFooter from "../components/english/EnglishFooter.js";

export default function ChineseHome(){
    return(
        <>
        <ChineseHeader />
        <ChineseHeroHome />
        <ChineseHomeBody />
        <ChineseHomeCTA />
        <ChineseHomeLowerHero />
        <EnglishFooter />
        </>
    )
}