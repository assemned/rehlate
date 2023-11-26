"use client";
import { TRAVELS } from "../assets/constans";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Travels = () => {
  const [scrollRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="travels">
      <div className="w-full">
        <div className=" max-c p-t p-x flexStart flex-col">
          <h6 className="subhead" id="scroll">
            قم بزيارة العالم
          </h6>
          <h2 className="head">الرحلات التي نقدمها</h2>
        </div>

        <div className="pb-16" ref={scrollRef}>
          <Splide
            className="splide"
            options={{
              direction: "rtl",
              fixedWidth: "27%",
              perPage: 3,
              perMove: 1,
              gap: "2rem",
              arrows: false,
              pagination: false,
              padding: "3.6rem",
              breakpoints: {
                1200: {
                  perPage: 2,
                  gap: "1rem",
                  fixedWidth: "35%",
                  padding: "1.6rem",
                },
                640: { fixedWidth: "48%", perMove: 1, padding: "1rem" },
                550: { fixedWidth: "90%", perPage: 1, perMove: 1 },
              },
            }}>
            {TRAVELS.map((place, index) => (
              <SplideSlide key={index}>
                <motion.div
                  initial={{ translateX: -1500 }}
                  animate={inView && { translateX: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 + index / 4 }}>
                  <img
                    src={place.image}
                    alt={place.name}
                    className=" w-full relative"
                  />
                  <div className=" bg-white rounded-xl absolute bottom-10 left-5 right-5 p-5 flexStartCol gap-1">
                    <h6 className="h5 font-lamaExtrabold">{place.name}</h6>
                    <p className="p4 font-lamaNormal text-umbra-400">
                      {place.description}
                    </p>
                  </div>
                </motion.div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Travels;
