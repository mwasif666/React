import React from "react";

const About =(props) =>{
    let {arrdata}=props;
    return(
        <>
        

        {
            arrdata.map((item,index)=>{

                return(
                    <h4 key={index}>{item}</h4>
                );
            })
        }
        </>
    );
};
export default About;