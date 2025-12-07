
import "../style/testimonials.css"

import React, { useEffect, useState, useRef } from "react";

 const cards = [
    {
        testimonial_name : "Amit Pandey",
        testimonial_position : "developer",
        testimonial_message_title : "We increased our brand visibility by 3x!",
        testimonial_message_body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus repellat sapiente laudantium ab earum dolor praesentium eligendi fugit, non ratione minus odit quae, reiciendis ut quas recusandae sunt maxime.",
        testimonial_image_link : "https://picsum.photos/200",
        testimonial_tags : ["Graphic Design", "meta ads","website"],
    },
    {
    testimonial_name: "Client B",
    testimonial_position: "Founder",
    testimonial_message_title: "Amazing team, fast results",
    testimonial_message_body:
      "Their strategy made everything click; we saw immediate improvements.",
    testimonial_image_link: "https://picsum.photos/400/400?random=2",
    testimonial_tags: ["Strategy", "Social"],
  },
  {
    testimonial_name: "Client C",
    testimonial_position: "CMO",
    testimonial_message_title: "Creative that converts",
    testimonial_message_body: "Hands down the best creatives we have used.",
    testimonial_image_link: "https://picsum.photos/400/400?random=3",
    testimonial_tags: ["Creative", "Campaigns"],
  },
    {
        testimonial_name : "Amit Pandey",
        testimonial_position : "developer",
        testimonial_message_title : "We increased our brand visibility by 3x!",
        testimonial_message_body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus repellat sapiente laudantium ab earum dolor praesentium eligendi fugit, non ratione minus odit quae, reiciendis ut quas recusandae sunt maxime.",
        testimonial_image_link : "https://picsum.photos/200",
        testimonial_tags : ["Graphic Design", "meta ads","website"],
    },
  ];


export default function Lumos3D() {
  const [scroll, setScroll] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (wrapperRef.current) {
        // Calculate the component's position relative to the viewport
        const rect = wrapperRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const componentTop = rect.top + scrollTop;
        
        // Calculate relative scroll position from when component starts
        const relativeScroll = Math.max(0, window.scrollY - componentTop);
        setScroll(relativeScroll);
      }
    };

    // Initial calculation
    onScroll();
    
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

//   const cards = [0, 1, 2, 3];

  return (
    <div className="lumos_wrapper" ref={wrapperRef}>
       <div className="lumos_wrapper_empty_space"></div> 
      <div
        className="camera"   
        style={{
          transform: `translateZ(${scroll * -0.5}px)`  // CAMERA MOVING BACK
        }}
      >
        {cards.map((c, i) => {
          const trigger = i * 600;
          // Longer animation duration for better readability
          const p = Math.min(1, Math.max(0, (scroll - trigger) / 1200));
          
          // Easing function for smoother, more readable appearance
          const easeOut = 1 - Math.pow(1 - p, 3);
          const easeInOut = p < 0.5 
            ? 2 * p * p 
            : 1 - Math.pow(-2 * p + 2, 3) / 2;

          return (
            <div
              key={i}
              className="card3D"
              style={{
                transform: `
              
                translateZ(${easeOut * 300}px)

                translateY(${(1 - easeOut) * 150}px)
                translateX(${(i % 2 ? 1 : -1) * easeOut ** 1.3 * 180}px)
                rotateX(${(1 - easeOut) * 12}deg)
                rotateY(${(i % 2 ? 1 : -1) * (1 - easeOut) * 10}deg)
                rotateZ(${(1 - easeOut) * 3}deg)
                scale(${0.95 + easeOut * 0.1})                           /* subtle scale shock */
                `,
                filter: `
                blur(${(1 - easeOut) * 1}px)                            /* reduced blur for better readability */
                brightness(${0.8 + easeOut * 0.2})                      /* brighter initial state */
                `,
                opacity: `${0.7 + easeOut * 0.3}`                      
              }}
            >
                <div className="testimonal_cards_wrapper">
                    <div className="testimonal_cards_left">
                        <div className="leftUpper">
                            <img src={c.testimonial_image_link} alt="" />
                            <span> {c.testimonial_position} </span>
                        </div>
                        <div className="leftLower">
                            <span>{c.testimonial_name}</span>
                        </div>
                    </div>
                    <div className="testimonal_cards_right">
                        <div className="rightUpper">
                            <span>{c.testimonial_message_title}</span>
                            <span className="rightUpper">{c.testimonial_message_body}</span>
                        </div>
                        <div className="rightLower">
                            {c.testimonial_tags.map((tag , i)=>{
                                return (
                                    <>
                                    <span className="testimonial_tags" >{tag}</span>
                                    </>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}
