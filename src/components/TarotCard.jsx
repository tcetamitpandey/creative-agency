import React from "react";
import { motion, useTransform } from "framer-motion";
import "../style/tarot_card.css";
import { useViewportScroll, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";


export default function TarotCard({ card, progress }) {
  const { title, image_url, desc, tags } = card;
  const back_image_url = "./tarot/placeholder_img.png";

  const rotateY = useTransform(progress, [0, 0.4, 0.6], [0, 160, 180]);

  return (
    <div className="tarot-wrapper">
      <motion.div
        className="tarot-card"
        style={{ rotateY }}
        whileHover={{ rotateX: 10, scale: 1.04 }}
      >
        <div className="card-inner">

          {/* FRONT */}
          <div className="card-face card-front">
            <img src={image_url} className="card-top-img" alt={title} />
            <div className="card-bottom"></div>
          </div>

          {/* BACK */}
          <div className="card-face card-back">
            <img src={back_image_url} className="card-top-img" alt="back" />

            <div className="card-bottom back-bottom">
              <h3>{title}</h3>
              <p>{desc}</p>

              <div className="back-tags">
                {tags?.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
