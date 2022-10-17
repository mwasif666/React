import React from "react";

const Header = (props) =>{
    return(
<>
<h1>My University Name is {props.data.myUniversity}</h1>
</>
    );
};
export default Header;