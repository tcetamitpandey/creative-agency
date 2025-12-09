import { useEffect, useRef, useState } from "react";
import "../style/cursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  // target mouse position (real mouse)
  const mousePos = useRef({ x: 0, y: 0 });

  // rendered cursor position (lerped)
  const cursorPos = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);

  // Adjustable smoothness (0.05 → slow, 0.15 → fast)
  const ease = 0.2;

  useEffect(() => {
    const move = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Hover detection
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        const clickable =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          window.getComputedStyle(target).cursor === "pointer";
        setIsHovering(clickable);
      }
    };

    window.addEventListener("mousemove", move);

    // Animation loop
    let rafId;
    const animate = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        // LERP toward mouse position (smooth trailing)
        cursorPos.current.x +=
          (mousePos.current.x - cursorPos.current.x) * ease;
        cursorPos.current.y +=
          (mousePos.current.y - cursorPos.current.y) * ease;

        cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
    />
  );
}
