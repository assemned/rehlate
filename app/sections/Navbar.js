import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="absolute w-full p-x py-10 z-10 max-sm:py-6 text-white">
      <div className=" w-full h-full flexBetween">
        <a href="/" className=" font-lamaBold h4">
          رحلاتي<span className=" text-rise-600">.</span>
        </a>

        <ul className=" flexCenter gap-8 max-lg:gap-4 font-lamaSemibold p2 max-sm:hidden">
          <a href="#travels" className="navHover">
            الرحلات
          </a>
          <a href="#services" className="navHover">
            الخدمات
          </a>
          <a href="#plans" className="navHover">
            الأسعار
          </a>
          <a href="#reviews" className="navHover">
            آراء العملاء
          </a>
          <a href="#contact" className="navHover">
            اتصل بنا
          </a>
        </ul>

        <a
          href="/"
          className=" font-lamaMedium p1 flexCenter gap-1 hover:scale-110 duration-200">
          <p>يوتيوب </p>
          <AiFillYoutube className="h4 max-sm:h3" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
