import { BrowserRouter, Route, Routes } from "react-router-dom";

import SIX from "../SIX";
import Home from "./pages/Home"
import People from "./pages/People"
import Projects from "./pages/Projects"
import Publications from "./pages/Publications"
import JoinUs from "./pages/JoinUs"

export default function SIXRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<SIX />}>
                <Route index element={<Home />} />
                <Route path="/people" element={<People />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/publications" element={<Publications />}/>
                <Route path="/join" element={<JoinUs />}/>
            </Route>
        </Routes>
    </BrowserRouter>
}