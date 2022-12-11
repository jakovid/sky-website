import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnglishHome from "./pages/EnglishHome";
import EnglishAboutUs from "./pages/EnglishAboutUs";
import EnglishOurTeam from "./pages/EnglishOurTeam";
import EnglishOurClasses from "./pages/EnglishOurClasses";
import ChineseHome from "./pages/ChineseHome";
import ChineseAboutUs from "./pages/ChineseAboutUs";
import ChineseOurTeam from "./pages/ChineseOurTeam";
import ChineseOurClasses from "./pages/ChineseOurClasses";

export default function RouteSwitch(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ChineseHome />} />
            <Route path='/about-us' element={<ChineseAboutUs />} />
            <Route path='/our-team' element={<ChineseOurTeam />} />
            <Route path='/our-classes' element={<ChineseOurClasses />} />
            <Route path='/home/en' element={<EnglishHome />} />
            <Route path='/about-us/en' element={<EnglishAboutUs />} />
            <Route path='/our-team/en' element={<EnglishOurTeam />} />
            <Route path="/our-classes/en" element={<EnglishOurClasses />} />
        </Routes>
        </BrowserRouter>
    )
}