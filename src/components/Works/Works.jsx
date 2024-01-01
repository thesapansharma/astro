import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import about from "../../img/abo.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <>
    <div className="works" id="works">
      {/* left side */}
      <div style={{flex:'6'}} className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Unlock the secrets of the stars and dive into the captivating world of astrology with our Horoscope Course.</span>
          <span>Course Highlights:</span>
          <spane>
 Astrology Fundamentals: Gain a solid foundation in astrology, understanding the significance of planets, houses, and zodiac signs.
 <br />
 Transit Analysis: Explore the dynamic interplay of planetary movements and their impact on daily life, relationships, and personal growth.
 <br />
 Predictive Astrology: Delve into predictive techniques to foresee potential opportunities and challenges, empowering you to navigate life's journey with foresight.
 <br />
 Synastry and Relationship Astrology: Uncover the cosmic connections between individuals, offering insights into compatibility, communication, and shared destiny.
 <br />
 Practical Applications: Apply astrology to real-life scenarios, gaining practical skills for personal growth, career decisions, and relationship dynamics.
 <br />
 Live Consultations: Engage in live consultations with experienced astrologers, receiving personalized guidance and clarifications on your astrological inquiries.
            <br />
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img height={'150px'} src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img height={'150px'}  src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img height={'150px'}  src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img height={'150px'}  src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img height={'150px'}  src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
    <section id="about">
    <div className="works" id="works">
      {/* left side */}
      <div style={{flex:'6'}} className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          About Us
          </span>
          <span>Astro75</span>
          <span></span>
          <spane>
            <br />
          We provide  best courses about palmistry and astrology to our students 
          <br />
More than 8 years of experienced teacher are in our team 
<br />
More than 200 students we trained till the date .
<br />
Students satisfaction rate is more than 93% because of one on one sessions
<br />
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 2, type: "spring" }}
          className="w-mainCircle"
         
        >
            <img style={{top:'0',left:'0'}} src={about} alt="" />
        </motion.div>
      </div>
    </div>
    </section>
    
    </>
  );
};

export default Works;
