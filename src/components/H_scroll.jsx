
import { useRef } from "react";
import "../style/h_scroll.css"
import {motion ,useTransform, useScroll } from "framer-motion"

import TarotCard from "./TarotCard";


export default function H_scroll() {

  const cards_content = [
    {
      card_index : 1,
      image_url : './tarot/card1.png',
      title : "PlaceHolder 1",
      tags : ['creative', 'magic', 'inspiration'],
      desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem cumque deleniti ut dolor vero commodi."
    },
    {
      card_index : 2,
      image_url : './tarot/card2.png',
      title : "PlaceHolder 2",
      tags : ['creative', 'magic', 'inspiration'],
      desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem cumque deleniti ut dolor vero commodi."
    },
    {
      card_index : 3,
      image_url : './tarot/card3.png',
      title : "PlaceHolder 3",
      tags : ['creative', 'magic', 'inspiration'],
      desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem cumque deleniti ut dolor vero commodi."
    },
    {
      card_index : 4,
      image_url : './tarot/card4.png',
      title : "PlaceHolder 4",
      tags : ['creative', 'magic', 'inspiration'],
      desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem cumque deleniti ut dolor vero commodi."
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
