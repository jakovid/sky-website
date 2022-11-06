import React from "react";
import EnglishHeader from "../components/english/EnglishHeader.js";
import EnglishHeroHome from "../components/english/home/EnglishHomeHero.js";
import EnglishHomeBody from "../components/english/home/EnglishHomeBody.js";
import EnglishHomeCTA from "../components/english/home/EnglishHomeCTA.js";
import EnglishHomeLowerHero from "../components/english/home/EnglishHomeLowerHero.js";
import EnglishFooter from "../components/english/EnglishFooter.js";

export default function EnglishHome(){
    return(
        <>
        <EnglishHeader />
        <EnglishHeroHome />
        <EnglishHomeBody />
        <EnglishHomeCTA />
        <EnglishHomeLowerHero />
        <EnglishFooter />
        </>
    )
}