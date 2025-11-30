import React, { useRef, useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import axios from "axios";

const NewsletterSection = () => {
  const firstname = useRef(null);
  const number = useRef(null);
  const paket = useRef(null);
  const comment = useRef(null);

  const [openCard, setOpenCard] = useState(null);

  const cards = [
    {
      title: "ASOS",
      desc: `
      
      «Asos» — основа, фундамент, системность.
                    Пакет создан для предпринимателей, которые хотят укрепить фундамент своего бизнеса: системность, контроль, дисциплину и осознанность. Это уровень внутреннего порядка и структурирования.

      `,
    },
    {
      title: "O'SISH",
      desc: `
      «O‘sish» — рост, развитие, взаимодействие.
Этот формат создан для предпринимателей, которые хотят развивать свой бизнес, внедрять новые решения и обмениваться опытом с другими лидерами. Это уровень практики, анализа и командного роста.

      `,
    },
    {
      title: "TA'SIR",
      desc: "Описание пакета TA'SIR. При клике карточка раскрывается, остальные сжимаются.",
    },
  ];

  const post = () => {
    axios.post(
      "https://birlash-telegram.onrender.com/api/client",
      {
        firstName: firstname.current.value,
        number: number.current.value,
        selectedPaket: paket.current.value,
        comment: comment.current.value,
      },
      {
        headers: {
          "x-api-key": "pokemon123",
          "Content-Type": "application/json",
        },
      }
    );
  };

  // закрытие по клику вне карточки
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenCard(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <section id="newsletter" className="section-container px-4 md:px-0">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden"
      >
        <div className="relative md:px-16 px-6 py-16 md:py-24 flex justify-center">
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"
          ></motion.div>

          {/* ⬇⬇⬇ 2-КОЛОНОЧНАЯ СЕТКА: СЛЕВА КАРТОЧКИ, СПРАВА ФОРМА */}
          <div
            ref={wrapperRef}
            className="relative grid grid-cols-1 md:grid-cols-[550px_1fr] gap-10 items-start mt-10 mx-auto"
          >
            {/* 🔵 ЛЕВАЯ КОЛОНКА — КАРТОЧКИ */}
            <div className="flex flex-col gap-5">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  onClick={() =>
                    setOpenCard(openCard === index ? null : index)
                  }
                  className="bg-white/20 cursor-pointer backdrop-blur-md text-white px-6 py-4 rounded-xl border border-white/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>

                  {/* ⬇ раскрытие */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      openCard === index
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="text-sm opacity-90">{card.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* 🟢 ПРАВАЯ КОЛОНКА — ФОРМА */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              className="w-full flex justify-center"
            >
              <motion.div
                variants={fadeIn("up", 0.6)}
                className="flex flex-col gap-5 w-full md:w-80"
              >
                <motion.input
                  ref={firstname}
                  variants={fadeIn("right", 0.7)}
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-6 py-4 rounded-xl bg-white focus:outline-none"
                />

                <motion.input
                  ref={number}
                  variants={fadeIn("right", 0.7)}
                  type="text"
                  placeholder="Номер телефона"
                  className="w-full px-6 py-4 rounded-xl bg-white focus:outline-none"
                />

                <motion.select
                  ref={paket}
                  variants={fadeIn("right", 0.7)}
                  className="w-full px-6 py-4 rounded-xl bg-white focus:outline-none"
                >
                  <option value="ASOS">ASOS</option>
                  <option value="O'SISH">O'SISH</option>
                  <option value="TA'SIR">TA'SIR</option>
                </motion.select>

                <motion.textarea
                  ref={comment}
                  variants={fadeIn("right", 0.7)}
                  placeholder="Напиши коментарий"
                  className="w-full px-6 py-4 rounded-xl bg-white focus:outline-none"
                />

                <motion.button
                  onClick={post}
                  variants={fadeIn("left", 0.7)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full cursor-pointer bg-green-500 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Discover</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
};

export default NewsletterSection;
