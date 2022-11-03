import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnglishHome from "./pages/EnglishHome";

export default function RouteSwitch(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<EnglishHome />} />
            <Route />
        </Routes>
        </BrowserRouter>
    )
}