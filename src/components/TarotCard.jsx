import { motion, useTransform } from "framer-motion";
import "../style/tarot_card.css";

export default function TarotCard({ card, progress, isMobile }) {
  const { title, desc, tags, back_img_url, image_url } = card;

  /* =======================
     📱 MOBILE: BACK FACE
     ======================= */
  if (isMobile) {
  return (
    <div className="tarot-wrapper">
      <div className="tarot-card mobile-card">

        <div className="card-face mobile-face">

          {/* BACK IMAGE */}
          <img
            src={back_img_url}
            className="card-top-img"
            alt={title}
          />

          {/* INFO */}
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
    </div>
  );
}


  /* =======================
     🖥 DESKTOP: FLIP CARD
     ======================= */
  const rotateY = useTransform(progress, [0, 0.4, 0.6], [0, 160, 180]);

  return (
    <div className="tarot-wrapper">
      <motion.div
        className="tarot-card"
        style={{ rotateY }}
        whileHover={{ rotateX: 10, scale: 1.04 }}
      >
        <div className="card-inner">

          <div className="card-face card-front">
            <img src={image_url} className="card-top-img" alt={title} />
            <div className="card-bottom"></div>
          </div>

          <div className="card-face card-back">
            <img src={back_img_url} className="card-top-img" alt="back" />
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
