import React, { useRef, useEffect } from "react";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { content } from "../../Content/Cards";
import gsap from "gsap";

const Cards = () => {
  const backgroundOverlayRefs = useRef([]);
  const cardContentRefs = useRef([]);

  useEffect(() => {
    // Initial setup for the card content
    cardContentRefs.current.forEach((contentRef, index) => {
      gsap.set(contentRef, { x: "100%" });
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(cardContentRefs.current[index], {
      x: "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(backgroundOverlayRefs.current[index], {
      opacity: 0.7,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardContentRefs.current[index], {
      x: "100%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(backgroundOverlayRefs.current[index], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="flex gap-12 container mx-auto py-5">
      {content.map((data, index) => {
        return (
          <div
            key={index}
            className="h-[26.5rem] w-[17.5rem] overflow-hidden relative text-white hover:scale-105 duration-200"
            style={{
              position: "relative",
              backgroundImage: `url(${data.backgroungImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className="absolute inset-0 bg-black opacity-0 transition-opacity"
              ref={(el) => (backgroundOverlayRefs.current[index] = el)}
              style={{ pointerEvents: "none" }}
            ></div>
            <div className="z-10">
              <div className="overlay-content" style={{ position: "relative" }}>
                <p className="text-sm font-bold p-5">{data.title}</p>
                <p className="text-xl font-bold px-5">{data.subTitle}</p>
              </div>
              <div
                className={`card${index} translate-x-full p-5`}
                ref={(el) => (cardContentRefs.current[index] = el)}
              >
                <p className="text-[15px] h-56 pt-2">{data.content}</p>
                <p className="text-lg absolute right-5 font-bold">
                  Expand
                  <KeyboardArrowRightOutlined />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
