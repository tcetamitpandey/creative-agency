
import "../style/hero.css"
import { FaArrowDown } from "react-icons/fa6";

export default function Hero(){
    return (<>
    <section className="hero_section_layout">
        <div className="background_effect_of_dot" ></div>
        <div className="hero_section_conatiner">
            <div className="hero_section_agency_title">Creative Agency</div>
            <div className="hero_section_agency_desc">
                    <span>WE MAKE</span>
                    {/* <span className="hero_section_things">THINGS</span> */}
                    <span className="hero_section_things" data-text="THINGS">THINGS</span>

                    
                    <span>POP
                        <span>.</span>
                    </span>
            </div>
            <div className="hero_section_about_us" >A full-service digital agency that believes in chaos, creativity, and code. We don't just build websites; we build experiences.</div>
            <div className="hero_section_explore_more" >
                EXPLORE WORKS
                <FaArrowDown />
            </div>
            <div className="hero_image_right_side">
                <img src="Hero_img.jpg" alt="" />
            </div>
            <div className="hero_image_left_side">
                <span>EST 2025
                </span>
                <span>Mumbai</span>
            </div>
        </div>
    </section>
    
    </>)
}