import React from "react";
import EnglishHeader from "../components/EnglishHeader.js";
import EnglishHeroHome from "../components/EnglishHomeHero.js";
import EnglishHomeBody from "../components/EnglishHomeBody.js";
import EnglishHomeCTA from "../components/EnglishHomeCTA.js";
import EnglishFooter from "../components/EnglishFooter.js";

export default function EnglishHome(){
    return(
        <>
        <EnglishHeader />
        <EnglishHeroHome />
        <EnglishHomeBody />
        <EnglishHomeCTA />
        <EnglishFooter />
        </>
    )
}