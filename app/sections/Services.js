"use client";
import { SERVICES } from "../assets/constans";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [scrollRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="services">
      <div className="max-cp flexCenterCol">
        <div className="flexCenter flex-col">
          <h6 className="subhead">تمتع في رحلتك</h6>
          <h2 className="head">مجموعة من خدماتنا</h2>
        </div>

        <div
          className="flex justify-around items-center relative bg-candy-100 rounded-3xl py-10 px-20 max-md:flex-wrap max-lg:px-14"
          ref={scrollRef}>
          {SERVICES.map((service, index) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={inView && { scale: 1 }}
              transition={{ duration: 1, delay: 0.2 + index / 2 }}
              key={index}
              className="flexCenterCol gap-5 p-16 max-xl:p-12 max-lg:p-6 text-center">
              <img src={service.image} alt={service.name} className="w-52" />
              <h6 className="h5 font-lamaExtrabold">{service.name}</h6>
              <p className="p4 font-lamaNormal text-umbra-400">
                {service.description}
              </p>
            </motion.div>
          ))}
          <img
            src="/arrowpurple.png"
            alt="arrow"
            className="absolute top-0 w-20 max-xl:w-14 left-[45%] right-[45%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
