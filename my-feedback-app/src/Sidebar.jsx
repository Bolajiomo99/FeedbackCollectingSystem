import React, {useState, useEffect, useRef} from "react";

function Sidebar(){
    const Sidebar1 = "Dashbord";
    const Sidebar2 = "All Members";
    const Sidebar3 = "All Events";
    const Sidebar4 = "Teams";
    const Sidebar5 = "Speakers";
    const Sidebar6 = "New Admin";
    const Sidebar7 = "Test";
    const Sidebar8 = "Test Results";
    const Sidebar9 = "Feedback";

    return(
        <div className="sidebar">
             <ul>
            <li>{Sidebar1}</li>
            <li>{Sidebar2}</li>
            <li>{Sidebar3}</li>
            <li>{Sidebar4}</li>
            <li>{Sidebar5}</li>
            <li>{Sidebar6}</li>
            <li>{Sidebar7}</li>
            <li>{Sidebar8}</li>
            <button>{Sidebar9}</button>
        </ul>
        </div>
       

    );
}

export default Sidebar