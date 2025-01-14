import { useEffect, useRef } from "react";
import styles from "./BlueDotAnimation.module.css"; // Si estás usando CSS Modules

export default function BlueDotAnimation() {
  // Especificamos el tipo como HTMLDivElement
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current) {
        const triggerTop = triggerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (triggerTop < windowHeight / 2) {
          triggerRef.current.classList.add(styles.animate);
        } else {
          triggerRef.current.classList.remove(styles.animate);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.circleContainer} ref={triggerRef}>
      <div className={styles.line}></div>
      <div className={styles.dot}></div>
      <div className={styles.dotMin}></div>
      <div className={styles.dotGray}></div>
      <div className={styles.dottedCircle}></div>
      <div className={styles.dottedCircleTwo}></div>
    </div>
  );
}
