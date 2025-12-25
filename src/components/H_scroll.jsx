
import { useRef } from "react";
import { useEffect, useState } from "react";

import "../style/h_scroll.css"
import {motion ,useTransform, useScroll } from "framer-motion"

import TarotCard from "./TarotCard";

function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [breakpoint]);

  return isMobile;
}


export default function H_scroll() {

  const isMobile = useIsMobile();


  const cards_content = [
    {
      card_index : 1,
      image_url : './tarot/card1.png',
      back_img_url : "./tarot/torat1.jpg",
      title : "Brand Development & Identity Refresh",
      tags : ['Brand Development', 'Identity'],
      desc : `We transform your brand into something clear, consistent, and value-driven.
We ensure it stands out where it matters most.
Brand building becomes a smooth, strategic process.`
    },
    {
      card_index : 2,
      image_url : './tarot/card2.png',
      back_img_url : "./tarot/torat2.jpg",
      title : "Influencer Marketing",
      tags : ['Influencer' ,'inspiration'],
      desc : `We collaborate with individuals and creators who genuinely align with your audience.
 No forced messaging - just authentic narratives that build trust and connection.`
    },
    {
      card_index : 3,
      image_url : './tarot/card3.png',
      back_img_url : "./tarot/torat3.jpg",
      title : "Paid Media",
      tags : ['data driven', 'measurable results'],
      desc : `We design and run data-backed digital initiatives that:
Clear insights, strong creative, measurable results.`
    },
    {
      card_index : 4,
      image_url : './tarot/card4.png',
      back_img_url : "./tarot/torat4.jpg",
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
          {isMobile ? (
  <div className="h_scroll_motion_div">
    {cards_content.map(card => (
      <TarotCard
        key={card.card_index}
        card={card}
        isMobile
      />
    ))}
  </div>
) : (
  <motion.div style={{ x }} className="h_scroll_motion_div">
    {cards_content.map(card => (
      <TarotCard
        key={card.card_index}
        card={card}
        progress={scrollYProgress}
      />
    ))}
  </motion.div>
)}


          
      </div>

    </section>
    </>
  );
}
