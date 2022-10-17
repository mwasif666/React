import React from "react";
// import App2 from "./Practice2.js";
import Map from "./mapping.js";
import './index.css';
import Nav from "./nav.js";

const App=()=>{
// let userInfo={
//     Name: "Wasif",
//     Class: "6th Semester"
// }


   let a=["a","b","c","d"];
  

    return(
        <>

<Map a={a}/>
<Nav />
</>
    )
}

export default App;
