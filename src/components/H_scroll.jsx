
import { useRef } from "react";
import "../style/h_scroll.css"
import {motion ,useTransform, useScroll } from "framer-motion"

import TarotCard from "./TarotCard";


export default function H_scroll() {

  const cards_content = [
    {
      card_index : 1,
      image_url : './tarot/card1.png',
      title : "Brand Development & Identity Refresh",
      tags : ['Brand Development', 'Identity'],
      desc : `We transform your brand into something clear, consistent, and value-driven.
We ensure it stands out where it matters most.
Brand building becomes a smooth, strategic process.`
    },
    {
      card_index : 2,
      image_url : './tarot/card2.png',
      title : "Influencer Marketing",
      tags : ['Influencer' ,'inspiration'],
      desc : `We collaborate with individuals and creators who genuinely align with your audience.
 No forced messaging - just authentic narratives that build trust and connection.`
    },
    {
      card_index : 3,
      image_url : './tarot/card3.png',
      title : "Paid Media",
      tags : ['data driven', 'measurable results'],
      desc : `We design and run data-backed digital initiatives that:
Clear insights, strong creative, measurable results.`
    },
    {
      card_index : 4,
      image_url : './tarot/card4.png',
      title : "Campaign Strategy",
      tags : ['Strategy', 'storytelling', 'recall'],
      desc : `We develop campaign ideas that:
Reflect your positioning, Capture attention, Strengthen recall & Encourage interaction
Strong storytelling meets thoughtful execution.`
    },
  ]

  const target_ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: target_ref,
    offset: ["start start", "end end"]
  }) // when we are at start of conatiner it will give 0 and once reach end of container it will give 1 

  const x = useTransform(scrollYProgress, [0 , 1] , ["110%", "-110%"] ) // chage the value to move cards starting and ending postion

  return (
    <>
    {/* <div style={{height :"100vh", backgroundColor :"#111"}} ></div> */}
    <section className="h_scroll_wrapper" ref={target_ref} >
      <div className="h_scroll_container">
          <motion.div style={{x}} className="h_scroll_motion_div" >
            {/* <div className="h_scroll_end_text" style={{marginRight : '50vw'}}>
              Every brand has a story waiting to be told. <br></br>
Scroll down — your inspiration begins here.
            </div> */}
            {
            cards_content.map( (card)=>{
              return (
                // < TarotCard key={card.card_index} card={card}   />
                <TarotCard key={card.card_index} card={card} progress={scrollYProgress} />

              )
            })}

            <div className="h_scroll_end_text">
            End of this showcase.<br></br>
Your next big idea might be in front of you <br></br>
scroll and find it
            </div>

          </motion.div>

          
      </div>

    </section>
    </>
  );
}
