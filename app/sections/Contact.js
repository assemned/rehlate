"use client";
import { CONTACT } from "../assets/constans";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Contact = () => {
  const [scrollRef1, inView1] = useInView({
    triggerOnce: true,
  });
  const [scrollRef2, inView2] = useInView({
    triggerOnce: true,
  });
  return (
    <section id="contact">
      <div className="max-cp flexStartCol" ref={scrollRef1}>
        <div className="flexStart flex-col">
          <h6 className="subhead">هل لديك سؤال؟</h6>
          <h2 className="head">يسعدنا التواصل معك</h2>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6 w-full justify-center items-center overflow-x-hidden">
          <motion.div
            initial={{ translateX: 1000 }}
            animate={inView1 && { translateX: 0 }}
            transition={{ duration: 1, delay: 1 }}>
            <div className="bg-rise-300 px-8 py-12 max-md:px-4 max-md:py-8 border-2 border-black rounded-3xl shadowBox w-full max-sm:max-w-sm max-sm:m-auto">
              <form className="flexStartCol w-full gap-5">
                <div className="flexStartCol w-full gap-4">
                  <label className="label">الاسم</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="يرجى تسجيل اسمك الكامل"
                  />
                </div>
                <div className="flexStartCol w-full gap-4">
                  <label className="label">البريد الإلكتروني</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="سجل بريدك الشخصي"
                  />
                </div>
                <div className="flexStartCol w-full gap-4">
                  <label className="label">الموضوع</label>
                  <textarea
                    className="input h-32"
                    type="text"
                    placeholder="ما هو السؤال أو المشكلة التي لديك؟"
                  />
                </div>
                <button className="font-lamaBold p1 rounded-2xl bg-umbra-700 py-4 px-14 text-white mt-5">
                  أرسل الرسالة
                </button>
              </form>
            </div>
          </motion.div>
          <div ref={scrollRef2}>
            {CONTACT.map((contact, index) => (
              <motion.div
                initial={{ translateX: -1000 }}
                animate={inView2 && { translateX: 0 }}
                transition={{ duration: 1, delay: 0.6 + index / 2 }}
                key={index}
                className="flex justify-start items-center gap-3 px-20 py-5 max-lg:px-6 max-sm:px-2">
                <img src={contact.image} className=" w-32 max-sm:w-24" />
                <div className="flex justify-center items-start flex-col h-full">
                  <h6 className="h4 font-lamaExtrabold">{contact.name}</h6>
                  <p className="p3 font-lamaNormalRegular text-umbra-500">
                    {contact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
