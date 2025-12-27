import React, { useEffect, useState, useRef } from "react";
import CubeFace from "./CubeFace";
import "../style/cubeFace.css";


const isMobile = window.innerWidth < 900

const teamMembers = [
  {
    id: 1,
    name: "STEP 1",
    role: "Discovery",
    quote: "We begin by deeply understanding your brand its vision, values, personality, and market position.",
    bio: `Your challenges are carefully analyzed to uncover real gaps, obstacles, and growth opportunities.
We clearly define your business and communication goals to align creativity with results.
This phase builds a strong foundation, ensuring every strategy and decision is intentional and effective.`,
    imageUrl: "discovery.jpg",
  },
  {
    id: 2,
    name: "STEP 2",
    role: "Evaluation",
    quote: "We assess your existing brand presence, communication, and performance across all touchpoints",
    bio: `What’s working is identified and strengthened to build on proven success.
What’s not delivering results is analyzed to understand gaps and inefficiencies.
Clear opportunities for improvement are defined, setting the stage for smarter, more effective solutions.`,
    imageUrl: isMobile ? "./Evaluation.jpg" :  "./execution_optimization.jpg",
  },
  {
    id: 3,
    name: "STEP 3",
    role: "Strategy & Ideation",
    quote: "Insights from discovery and evaluation are transformed into a clear, actionable strategy.",
    bio: `We define a structured direction that aligns with your brand vision and business goals.
Creative ideas are developed with purpose, not guesswork, ensuring relevance and impact.
Every concept is designed to communicate clearly, connect emotionally, and drive results.`,
    imageUrl: "./Strategy_ideation.jpg",
  },
  {
    id: 4,
    name: "STEP 4",
    role: "Execution & Optimization",
    quote: "Ideas are brought to life with precision, ensuring clarity, consistency, and quality at every touchpoint.",
    bio: `Each element is executed in alignment with the defined strategy and brand direction.
Performance is continuously monitored using data-driven insights and real metrics.
Based on results, we refine, optimize, and improve to maximize impact and long-term effectiveness`,
    imageUrl: isMobile ?  "./execution_optimization.jpg" :  "./Evaluation.jpg",
  }
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
