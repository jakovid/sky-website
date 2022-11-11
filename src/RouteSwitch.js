import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnglishHome from "./pages/EnglishHome";
import EnglishAboutUs from "./pages/EnglishAboutUs";
import EnglishOurTeam from "./pages/EnglishOurTeam";
import EnglishOurClasses from "./pages/EnglishOurClasses";

export default function RouteSwitch(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<EnglishHome />} />
            <Route path='/en/about-us' element={<EnglishAboutUs />} />
            <Route path='/en/our-team' element={<EnglishOurTeam />} />
            <Route path="/en/our-classes" element={<EnglishOurClasses />} />
        </Routes>
        </BrowserRouter>
    )
}