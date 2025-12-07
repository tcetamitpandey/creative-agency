

import "../style/marque_section.css"

import Marquee from "react-fast-marquee";


export default function Marque_Section(){
    return (<>
    {/* <div className="marque_section_stripe" ></div> */}
    <div className="marquee_tilted_wrapper" >
        <div className="marquee_inner" >

            <Marquee speed={150} pauseOnHover={true} gradient={false} >
                <div  className="marque_section_container">
                    <span className="marquee_1" >Let's Create Magic •</span>
                    <span className="marquee_2" >Design That Works •</span>
                    <span className="marquee_3">No Boring Stuff •</span>
                    <span className="marquee_4">Bold Ideas •</span>
                </div>
            </Marquee>

        </div>
    </div>
    
    </>)
}