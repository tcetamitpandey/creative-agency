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
  const containerRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const vh = window.innerHeight;
    const rotationPerVh = 90;
    const rotation = (scrollTop / vh) * rotationPerVh;
    setScrollY(rotation);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageFaces = teamMembers.map((member) => ({
    content: (
      <div className="cube-image-face">
        <img src={member.imageUrl} alt={member.name} className="cube-portrait" />
        <div className="cube-image-overlay"></div>
      </div>
    ),
    style: {},
  }));

  const textFaces = teamMembers.map((member) => ({
    content: (
      <div className="cube-text-content">
        <h2 className="cube-name">{member.name}</h2>
        {member.role && <h3 className="cube-role">[{member.role}]</h3>}
        {member.quote && (
          <p className="cube-quote">{member.quote}</p>
        )}
        <p className="cube-bio">{member.bio}</p>
      </div>
    ),
    style: {},
  }));

  return (
    <div className="dual-hero-container" ref={containerRef}>
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
