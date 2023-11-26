"use client";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BACKGROUND } from "../assets/constans";

const Hero = () => {
  return (
    <section id="hero" className=" w-full h-screen relative font-lamaMedium">
      <Splide
        aria-label="My Favorite Images"
        className="absolute top-0 h-screen"
        options={{
          direction: "rtl",
          type: "loop",
          perPage: 1,
          arrows: false,
          autoplay: true,
          trimSpace: "1s",
          pagination: true,
        }}>
        {BACKGROUND.map((bg, index) => (
          <SplideSlide key={index}>
            <img
              src={bg}
              alt="bg"
              className=" w-full h-screen object-cover object-center top-10"
            />
          </SplideSlide>
        ))}
      </Splide>
      <div className="flexCenterCol text-center gap-8 text-white pt-20 absolute top-0 bottom-0 left-0 right-0">
        <h1 className=" h1 font-lamaBold">سافر معنا إلى العالم</h1>

        <h6 className=" font-lama p2">
          نوفر لك أفضل الرحلات التي تحتاجها إلى جميع البلدان
          <br />و بخدمات مخصصة لك و لعائلتك
        </h6>

        <a
          href="/"
          className="font-lamaBold flexCenter gap-3 bg-rise-600 hover:bg-rise-500 px-10 py-2 rounded-xl shadow hover:shadow-xl duration-200 hover:duration-200 text-umbra-700">
          <span className="p4 pt-[1px]">احجز الآن</span>
          <div className=" p-[2px] bg-white rounded-full">
            <MdKeyboardArrowLeft className=" text-xl pr-[1px]" />
          </div>
        </a>

        <div className=" pt-10 relative">
          <a href="#scroll" className="flexCenterCol gap-1">
            <p className="p3 font-lamaSemibold circleAnimation">تابع للأسفل</p>
            <img
              src="/mouse.png"
              alt="mouse"
              className=" h-24 cursor-pointer circleAnimation"
            />
          </a>
          <img
            src="/arrow.png"
            alt="arrow"
            className="absolute h-36 inset-x-32 -inset-y-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
