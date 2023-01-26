import React from "react";
const MyFooter=()=>{
    let year=new Date().getFullYear();
    // console.log(year);
    return(
        <>
            <footer className="w-100 bg-light text-center">
                <p>©️ {year} GirrajTechnical. All rights reserved | Terms & Conditions</p>
            </footer>
        </>
    )
}

export default MyFooter;