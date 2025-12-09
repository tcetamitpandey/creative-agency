import React, { useEffect, useState, useRef } from "react";
import CubeFace from "./CubeFace";
import "../style/cubeFace.css";

const teamMembers = [
  {
    id: 1,
    name: "ALINA",
    role: "CEO",
    quote: "AS THE CEO OF LUMOS, I UNDERSTAND THE RESPONSIBILITY THAT FALLS ON MY SHOULDERS EACH DAY.",
    bio: "HOWEVER I AM NOT AFRAID BECAUSE EVERY MEMBER OF OUR TEAM IS A TRUE PROFESSIONAL FULLY TRUSTWORTHY AND DEDICATED TO THEIR WORK. THEIR EXPERTISE AND COMMITMENT GIVE ME THE CONFIDENCE THAT WE WILL CONSISTENTLY DELIVER OUTSTANDING RESULTS. TOGETHER WE STRIVE TO EXCEED EXPECTATIONS AND DRIVE SUCCESS FOR OUR CLIENTS.",
    imageUrl: "https://picsum.photos/600/800?random=1",
  },
  {
    id: 2,
    name: "DARY",
    role: "FOUNDER",
    quote: "",
    bio: "I CREATED THIS COMPANY BECAUSE AS A LITTLE GIRL I WANTED TO EARN BY INCREASING PEOPLE'S INCOME NOT BY TAKING IT AWAY FROM THEM.",
    imageUrl: "https://picsum.photos/600/800?random=2",
  },
  {
    id: 3,
    name: "ALINA",
    role: "CEO",
    quote: "AS THE CEO OF LUMOS, I UNDERSTAND THE RESPONSIBILITY THAT FALLS ON MY SHOULDERS EACH DAY.",
    bio: "HOWEVER I AM NOT AFRAID BECAUSE EVERY MEMBER OF OUR TEAM IS A TRUE PROFESSIONAL FULLY TRUSTWORTHY AND DEDICATED TO THEIR WORK. THEIR EXPERTISE AND COMMITMENT GIVE ME THE CONFIDENCE THAT WE WILL CONSISTENTLY DELIVER OUTSTANDING RESULTS. TOGETHER WE STRIVE TO EXCEED EXPECTATIONS AND DRIVE SUCCESS FOR OUR CLIENTS.",
    imageUrl: "https://picsum.photos/600/800?random=1",
  },
  {
    id: 4,
    name: "DARY",
    role: "FOUNDER",
    quote: "",
    bio: "I CREATED THIS COMPANY BECAUSE AS A LITTLE GIRL I WANTED TO EARN BY INCREASING PEOPLE'S INCOME NOT BY TAKING IT AWAY FROM THEM.",
    imageUrl: "https://picsum.photos/600/800?random=2",
  },
];

const DualHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (isMobile) return; // disable cube scrolling on mobile
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const rotationPerVh = 90;
      const rotation = (scrollTop / vh) * rotationPerVh;
      setScrollY(rotation);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // MOBILE VERSION -------------------------------------------------------
  if (isMobile) {
    return (
      <div className="mobile-team-container">
        {teamMembers.map((m) => (
          <div className="mobile-member-block" key={m.id}>
            <img src={m.imageUrl} alt={m.name} className="mobile-member-image" />

            <div className="mobile-member-text">
              <h2>{m.name}</h2>
              {m.role && <h3>[{m.role}]</h3>}
              {m.quote && <p className="mobile-quote">{m.quote}</p>}
              <p className="mobile-bio">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // DESKTOP / TABLET VERSION ----------------------------------------------
  const imageFaces = teamMembers.map((member) => ({
    content: (
      <div className="cube-image-face">
        <img src={member.imageUrl} alt={member.name} className="cube-portrait" />
        <div className="cube-image-overlay"></div>
      </div>
    ),
  }));

  const textFaces = teamMembers.map((member) => ({
    content: (
      <div className="cube-text-content">
        <h2 className="cube-name">{member.name}</h2>
        {member.role && <h3 className="cube-role">[{member.role}]</h3>}
        {member.quote && <p className="cube-quote">{member.quote}</p>}
        <p className="cube-bio">{member.bio}</p>
      </div>
    ),
  }));

  return (
    <div className="dual-hero-container">
      <div className="dual-hero-wrapper">
        <div className="cube-wrapper">
          <CubeFace faces={textFaces} rotationX={scrollY} />
        </div>
        <div className="cube-wrapper">
          <CubeFace faces={imageFaces} rotationX={-scrollY} />
        </div>
      </div>
    </div>
  );
};

export default DualHero;
