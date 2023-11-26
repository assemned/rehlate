import { FaSquareFacebook, FaYoutube } from "react-icons/fa6";
import { FOOTER } from "../assets/constans";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-umbra-700 text-white">
        <div className="grid grid-cols-6 max-sm:grid-cols-2 max-sm:justify-center max-sm:gap-8 p-x p-y justify-start items-start">
          <div className="flexStartCol gap-5 col-span-2 pl-28 max-xl:pl-0 max-md:gap-3">
            <h6 className=" h3 font-lamaExtrabold">
              رحلاتي<span className=" text-rise-600">.</span>
            </h6>
            <p className=" text-umbra-400 font-lamaNormal p3">
              شركة متخصصة في مجال السياحة والسفر نقدم خدمات تأمين الرحلات
              والحجوزات والفيز لكل أنحاء العالم.
            </p>
          </div>
          {FOOTER.map((box, index) => (
            <div key={index} className="flexStartCol gap-5 max-md:gap-4">
              <h6 className=" h5 font-lamaExtrabold">{box.title}</h6>
              <ul className="flexStartCol gap-5 max-md:gap-2 text-umbra-400 font-lamaNormal p3">
                {box.links.map((link, index) => (
                  <a key={index} href="/">
                    {link}
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" border-t-[1px] border-umbra-400 max-c p-x py-5 flexBetween max-md:flex-col max-md:gap-3">
          <p className="p3 font-lamaNormal text-umbra-400 max-md:text-center">
            2023 جميع الحقوق محفوظة لموقع
            <span className=" text-rise-600"> للمبرمج عاصم نجار</span>
          </p>
          <div className=" h3 flexStart gap-3 max-lg:h1">
            <a href="/">
              <FaYoutube className=" p-[2px] border-[1px] border-umbra-400 rounded" />
            </a>
            <a href="/">
              <AiFillInstagram className=" p-[2px] border-[1px] border-umbra-400 rounded" />
            </a>
            <a href="/">
              <FaSquareFacebook className=" p-[2px] border-[1px] border-umbra-400 rounded" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
