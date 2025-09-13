import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Cute Keyrings", "Cozy Knits", "Slow Fashion", "Made-for-You Knits"],
      typeSpeed: 120,
      backSpeed: 60,
      loop: true,
      showCursor: true, // <-- disable cursor
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return <span ref={el}></span>;
};

export default TypingText;
