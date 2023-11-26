"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { REVIEWS } from "../assets/constans";
import { MdArrowForwardIos, MdStar } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reviews = () => {
  const [scrollRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="reviews">
      <div className="max-cp flexCenterCol max-sm:mb-6">
        <div className="flexCenterCol text-center">
          <h6 className="subhead" ref={scrollRef}>
            قالوا عنا
          </h6>
          <h2 className="head">آراء مجموعة من عملائنا</h2>
        </div>

        <Splide
          className=" w-full "
          aria-label="ٌReviews"
          hasTrack={false}
          options={{
            direction: "rtl",
            type: "loop",
            perPage: 3,
            gap: "2rem",
            pagination: false,
            breakpoints: {
              900: { perPage: 2, perMove: 1 },
              550: { perPage: 1 },
            },
          }}>
          <SplideTrack>
            {REVIEWS.map((review, index) => (
              <SplideSlide
                key={index}
                className=" bg-candy-100 py-10 px-8 max-md:px-4 rounded-3xl">
                <motion.div
                  initial={{ opacity: 0, translateY: 0 }}
                  animate={inView && { opacity: 1, translateY: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index / 3 }}
                  className=" flexStartCol gap-5">
                  <div className="h4 flexStart text-rise-600 max-lg:h3 max-md:h2">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <img src={review.image} alt="w-full" className=" w-12" />
                    <p className="h4 font-lamaExtrabold">{review.user}</p>
                  </div>
                  <p className="p3 font-lamaNormalRegular text-umbra-500">
                    {review.comment}
                  </p>
                </motion.div>
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__arrows absolute left-[10%] right-[10%] -bottom-20 max-sm:-bottom-14 m-auto w-36 h-10">
            <button className="splide__arrow splide__arrow--next ">
              <MdArrowForwardIos />
            </button>
            <button className="splide__arrow splide__arrow--prev ">
              <MdArrowForwardIos />
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default Reviews;
