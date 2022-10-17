import React from "react";
import './index.css';

const Map = (props) => {
    return (
        <>
            <div className="s">
                <h3>Wasi</h3>
                {
                    props.a.map((item, index) => {

                        return (
                           
                            <h3
                                key={index}>{item}</h3>
                        )

                    })
                }
            </div>

        </>
    )
}
export default Map;