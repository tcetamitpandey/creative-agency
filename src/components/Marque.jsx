

import "../style/marque_section.css"
import { useState } from "react";

import Marquee from "react-fast-marquee";




export default function Marque_Section(){

    const [isMobile , setIsMobile ]  = useState(window.innerWidth < 768 ) 

    return (<>
    {/* <div className="marque_section_stripe" ></div> */}
    <div className="marquee_tilted_wrapper" >
        <div className="marquee_inner" >

            <Marquee speed={ isMobile ? 200 : 150 } pauseOnHover={true} gradient={false} >
                <div  className="marque_section_container">
                    <span className="marquee_1" >Brands can blend in •</span>
                    <span className="marquee_2" >We help them stand out •</span>
                    <span className="marquee_3">Our approach is simple: </span>
                    <span className="marquee_4">purposeful creativity without unnecessary complication •</span>
                </div>
            </Marquee>

        </div>
    </div>
    
    </>)
}