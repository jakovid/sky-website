import React from "react";
import EnglishHeader from "../components/english/EnglishHeader";
import EnglishAboutUsHero from "../components/english/about-us/EnglishAboutUsHero";
import EnglishAboutUsBody from "../components/english/about-us/EnglishAboutUsBody";
import EnglishFooter from "../components/english/EnglishFooter";

export default function EnglishAboutUs(){
    return(
        <div>
            <EnglishHeader />
            <EnglishAboutUsHero />
            <EnglishAboutUsBody />
            <EnglishFooter />
        </div>
    )
}