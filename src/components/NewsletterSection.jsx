import React, { useRef, useState, useEffect, useMemo, useContext } from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { AppContext } from "@/AppContext";

const NewsletterSection = () => {
  const firstname = useRef(null);
  const number = useRef(null);
  const paket = useRef(null);
  const comment = useRef(null);
  const { t, i18n, ready } = useTranslation();
  const { theme } = useContext(AppContext);
  const { isDark } = theme;

  const [openCard, setOpenCard] = useState(null);
  const [loading, setLoading] = useState(false);

  // Текстовые карточки пересоздаются при смене языка
  const cards = useMemo(
    () => [
      { title: t("packages.0.title"), desc: t("packages.0.details") },
      { title: t("packages.1.title"), desc: t("packages.1.details") },
      { title: t("packages.2.title"), desc: t("packages.2.details") },
    ],
    [t, i18n.language]
  );

  // Тёмная/светлая тема — динамические классы
  const wrapBg = isDark ? "bg-[#052e2e]" : "bg-[#004D57]"; // основной фон блока
  const cardBg = isDark ? "bg-gray-800/60" : "bg-white/20";
  const cardText = isDark ? "text-gray-100" : "text-white";
  const cardDesc = isDark ? "text-gray-300" : "text-white/90";
  const formBg = isDark ? "bg-gray-900" : "bg-white";
  const formText = isDark ? "text-gray-100" : "text-gray-900";
  const inputPlaceholder = isDark ? "placeholder-gray-400" : "placeholder-gray-500";
  const selectBg = formBg;
  const buttonBg = isDark ? "bg-emerald-500" : "bg-green-500";
  const buttonText = "text-white";

  const post = async () => {
    const first = firstname.current?.value?.trim();
    const phone = number.current?.value?.trim();
    const sel = paket.current?.value;
    if (!first || !phone) {
      alert(t("form.fill_required") || "Please fill required fields");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "https://birlash-telegram.onrender.com/api/client",
        {
          firstName: first,
          number: phone,
          selectedPaket: sel,
          comment: comment.current?.value || "",
        },
        {
          headers: {
            "x-api-key": "pokemon123",
            "Content-Type": "application/json",
          },
        }
      );
      alert(t("form.sent_success") || "Sent");
      if (firstname.current) firstname.current.value = "";
      if (number.current) number.current.value = "";
      if (comment.current) comment.current.value = "";
    } catch (err) {
      console.error(err);
      alert(t("form.sent_error") || "Error sending");
    } finally {
      setLoading(false);
    }
  };

  // Закрытие по клику вне карточки
  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpenCard(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!ready) return null;

  return (
    <section id="newsletter" className="section-container px-4 md:px-0">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className={`${wrapBg} rounded-2xl overflow-hidden`}
      >
        <div className="relative md:px-16 px-6 py-16 md:py-24 flex justify-center">
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#008B8B] to-transparent clip-path-slant hidden md:block"
            aria-hidden
          />

          <div ref={wrapperRef} className="relative grid grid-cols-1 md:grid-cols-[550px_1fr] gap-10 items-start mt-10 mx-auto">
            {/* LEFT: CARDS */}
            <div className="flex flex-col gap-5">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  onClick={() => setOpenCard(openCard === index ? null : index)}
                  className={`${cardBg} cursor-pointer backdrop-blur-md px-6 py-4 rounded-xl border ${isDark ? "border-gray-700" : "border-white/30"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.18 }}
                >
                  <h3 className={`text-xl font-semibold ${cardText}`}>{card.title}</h3>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={openCard === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.36 }}
                    className="overflow-hidden mt-2"
                  >
                    <p className={`text-sm ${cardDesc}`}>{card.desc}</p>
                  </motion.div>
                </motion.div>
              ))}

              <div className={`${isDark ? "bg-gray-200/5 text-gray-100" : "bg-white text-black"} cursor-pointer backdrop-blur-md px-6 py-6 rounded-xl border ${isDark ? "border-gray-700" : "border-white/30"}`}>
                <p>{t("feedback_text_form_card")}</p>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <motion.div variants={fadeIn("left", 0.5)} className="w-full flex justify-center">
              <motion.div variants={fadeIn("up", 0.6)} className="flex flex-col gap-5 w-full md:w-80">
                <motion.input
                  ref={firstname}
                  variants={fadeIn("right", 0.7)}
                  type="text"
                  placeholder={t("form.name")}
                  className={`w-full px-6 py-4 rounded-xl ${formBg} ${formText} ${inputPlaceholder} focus:outline-none`}
                />

                <motion.input
                  ref={number}
                  variants={fadeIn("right", 0.7)}
                  type="text"
                  placeholder={t("form.phone")}
                  className={`w-full px-6 py-4 rounded-xl ${formBg} ${formText} ${inputPlaceholder} focus:outline-none`}
                />

                <motion.select
                  ref={paket}
                  variants={fadeIn("right", 0.7)}
                  className={`w-full px-6 py-4 rounded-xl ${selectBg} ${formText} focus:outline-none`}
                  defaultValue="ASOS"
                >
                  <option value="ASOS">{t("package_section_tasir.asos") || "ASOS"}</option>
                  <option value="O'SISH">{t("package_section_tasir.osish") || "O'SISH"}</option>
                  <option value="TA'SIR">{t("package_section_tasir.tasir") || "TA'SIR"}</option>
                </motion.select>

                <motion.textarea
                  ref={comment}
                  variants={fadeIn("right", 0.7)}
                  placeholder={t("form.comment")}
                  className={`w-full px-6 py-4 rounded-xl ${formBg} ${formText} ${inputPlaceholder} focus:outline-none`}
                />

                <motion.button
                  onClick={post}
                  variants={fadeIn("left", 0.7)}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${buttonBg} ${buttonText} w-full cursor-pointer px-8 py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60`}
                  disabled={loading}
                >
                  <span>{loading ? t("form.sending") || "Sending..." : t("send_btn_text")}</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .clip-path-slant { clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%); }
      `}</style>
    </section>
  );
};

export default NewsletterSection;
