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
            <Route path='/en/home' element={<EnglishHome />} />
            <Route path='/en/about-us' element={<EnglishAboutUs />} />
            <Route path='/en/our-team' element={<EnglishOurTeam />} />
            <Route path="/en/our-classes" element={<EnglishOurClasses />} />
        </Routes>
        </BrowserRouter>
    )
}