// src/components/Portal.jsx
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children, id = "lumos-portal-root" }) {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.setAttribute("id", id);
  }

  useEffect(() => {
    document.body.appendChild(elRef.current);
    return () => {
      if (elRef.current.parentNode) elRef.current.parentNode.removeChild(elRef.current);
    };
  }, []);

  return createPortal(children, elRef.current);
}
