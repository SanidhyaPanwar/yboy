import { useEffect } from "react";
import Typed from "typed.js";

const NavbarScripts = () => {
  useEffect(() => {
    // Sticky navbar and scroll-up button
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollUpBtn = document.querySelector(".scroll-up-btn");

      if (window.scrollY > 20) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }

      if (window.scrollY > 500) {
        scrollUpBtn?.classList.add("show");
      } else {
        scrollUpBtn?.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll-up button click
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    scrollUpBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });

    // Dark mode toggle
    const darkToggleBtn = document.querySelector(".btn-toggle");
    darkToggleBtn?.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const darkIcon = document.getElementById("darkMode");
      darkIcon?.classList.toggle("fa-sun");
      darkIcon?.classList.toggle("fa-moon");
    });

    // Menu toggle
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".navbar .menu");
    menuBtn?.addEventListener("click", () => {
      menu?.classList.toggle("active");
      menuBtn.querySelector("i")?.classList.toggle("active");
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default NavbarScripts;
