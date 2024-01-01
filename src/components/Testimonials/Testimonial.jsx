import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Profile1.jpg";
import profilePic2 from "../../img/Profile2.jpg";
import profilePic3 from "../../img/Profile3.jpg";
import profilePic4 from "../../img/Profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "I was skeptical at first, but this Horoscope Course completely blew me away! It's like having a personal roadmap for life. The insights I gained were shockingly accurate. I now make decisions with cosmic confidence! Highly recommended!",
    },
    {
      img: profilePic2,
      review:
      "As a hardcore skeptic, I didn't think astrology could offer anything substantial. Boy, was I wrong! This course not only made me a believer but also provided a fascinating lens through which to understand myself and others. Mind officially blown!",
    },
    {
      img: profilePic3,
      review:
      "I've tried other horoscope courses before, but this one is on a whole new level. The instructors are like cosmic wizards, breaking down complex concepts into easy-to-understand nuggets of wisdom. Now, I feel like I have the universe on speed dial!",
    },
    {
      img: profilePic4,
      review:
      "Honestly, I thought horoscopes were just for entertainment. But after taking this course, I feel like I've gained a superpower. The lessons were so engaging, and the practical applications are mind-blowing. Thank you for unlocking the secrets of the stars!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
