import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import basic from "../../img/basic.png";
import advance from "../../img/advance.png";
import hand from "../../img/hand.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <section id="courses">
       <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>COURSES WE</span>
        <span>OFFER</span>
        <spane>
        Explore different courses options within
          <br />
          each stream to select the best fit for you.
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={basic}
            heading={"Basic of astrology"}
            detail={"Explore the fundamental principles of the zodiac, planetary influences, and the art of interpreting birth charts."}
            price={"Rs.2,999"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={advance}
            heading={"Advance Astrology"}
            detail={"Explore the spiritual dimensions of astrology, connecting the celestial with the earthly."}
            price={"Rs.24,999"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={hand}
            heading={"Hand Reading"}
            detail={
              "Learn to decipher the unique messages embedded in the heart, head, life, and fate lines."
            }
            price={"Rs.24,999"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
    </section>
   
  );
};

export default Services;
