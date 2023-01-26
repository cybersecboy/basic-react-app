import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import MyHome from "./MyHome";
import MyAbout from "./MyAbout";
import MyServices from "./MyServices";
import MyContact from "./MyContact";
import MyNavBar from "./MyNavBar";
import MyFooter from "./MyFooter";
const App = () => {
    return (
        <>
            <MyNavBar />
            <Routes>
                <Route path="/" element={<MyHome />} />
                <Route path="/about" element={<MyAbout />} />
                <Route path="/services" element={<MyServices />} />
                <Route path="/contact" element={<MyContact />} />
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
            <MyFooter />
        </>
    )
}

export default App;