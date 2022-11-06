import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnglishHome from "./pages/EnglishHome";
import EnglishAboutUs from "./pages/EnglishAboutUs";

export default function RouteSwitch(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<EnglishHome />} />
            <Route path='/about-us' element={<EnglishAboutUs />} />
        </Routes>
        </BrowserRouter>
    )
}