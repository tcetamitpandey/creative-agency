
import "../style/hero.css"
import { FaArrowDown } from "react-icons/fa6";

export default function Hero(){
    return (<>
    <section className="hero_section_layout">
        <div className="background_effect_of_dot" ></div>
        <div className="hero_section_conatiner">
            <div className="hero_section_agency_title">Creative Agency</div>
            <div className="hero_section_agency_desc">
                    <span>We Don’t Do</span>
                    {/* <span className="hero_section_things">THINGS</span> */}
                    <span className="hero_section_things" data-text="NICE">“Nice”</span>

                    
                    <span className="hero_section_title_extra">
                        <span>We Deliver Real</span>
                        <br />
                        <span className="hero_section_title_extra_result" >RESULTS</span>
                        <span>.</span>
                    </span>
            </div>
            <div className="hero_section_about_us" >In a world where most brands start looking and sounding identical, we believe in creating work that actually stands apart.
 We focus on clarity, distinctiveness, and meaningful communication — not the usual trend-following noise..</div>
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