"use client";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PLANS } from "../assets/constans";
import { RxCheck } from "react-icons/rx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Plans = () => {
  const [scrollRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="plans">
      <div className="max-cp font-lamaNormal flexStartCol ">
        <div className="flexStart flex-col">
          <h6 className="subhead">لا تقلق حول التكلفة</h6>
          <h2 className="head">خطط تناسب ميزانيتك</h2>
        </div>

        <div
          className="flex justify-between items-start max-md:flex-col max-md:justify-center w-full gap-16 max-lg:gap-6"
          ref={scrollRef}>
          {PLANS.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, translateY: -200 }}
              animate={inView && { opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.5 + index / 2 }}
              key={index}
              className={`${
                index % 2 === 0
                  ? " bg-rise-300 mt-14 max-md:mt-0"
                  : " bg-candy-800 text-white"
              } px-8 py-12 border-2 border-black rounded-3xl shadowBox max-lg:px-5 max-md:w-[70%] max-md:m-auto max-sm:max-w-sm max-sm:w-[90%]`}>
              <div
                className={`flexStartCol gap-3 border-b-[1px] pb-8 ${
                  index % 2 === 0 ? "border-black" : "border-white"
                }`}>
                <p className="h4 font-lamaExtrabold">
                  ${plan.price}
                  <span className="h5 font-lamaSemibold"> / للشخص</span>
                </p>
                <p className="h5 font-lamaExtrabold">{plan.name}</p>
                <p className="  font-lamaNormalRegular">{plan.description}</p>
              </div>
              <div className="pt-8 flexStartCol gap-3 font-lamaNormal">
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-1">
                    <div className=" p-[1px] bg-white rounded-full text-black">
                      <RxCheck className=" text-xl pr-[1px]" />
                    </div>
                    {feature}
                  </div>
                ))}
                <button
                  className={`flexCenter gap-2 font-lamaMedium h5 w-full p-3 mt-10 border-[1px] rounded-xl ${
                    index % 2 === 0 ? " border-black" : " border-white"
                  }`}>
                  احجز الآن
                  <div className=" p-[2px] bg-white rounded-full text-black">
                    <MdKeyboardArrowLeft className=" text-xl pr-[1px]" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
