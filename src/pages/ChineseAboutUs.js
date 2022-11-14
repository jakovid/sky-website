import React from "react";
import ChineseHeader from '../components/chinese/ChineseHeader';
import ChineseAboutUsBody from "../components/chinese/about-us/ChineseAboutUsBody";
import ChineseAboutUsHero from "../components/chinese/about-us/ChineseAboutUsHero";
import EnglishFooter from "../components/english/EnglishFooter";

export default function ChineseAboutUs() {
    return(
        <div>
            <ChineseHeader />
            <ChineseAboutUsHero />
            <ChineseAboutUsBody />
            <EnglishFooter />
        </div>
    )
}