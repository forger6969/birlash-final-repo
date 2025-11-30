import React, { useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import axios from 'axios';

const NewsletterSection = () => {

  const firstname = useRef(null)
  const number = useRef(null)
  const paket = useRef(null)
  const comment = useRef(null)


  const post = () => {
    axios.post(
      "https://birlash-telegram.onrender.com/api/client",
      {
        "firstName": firstname.current.value,
        "number": number.current.value,
        "selectedPaket": paket.current.value,
        "comment": comment.current.value
      },
      {
        headers: {
          "x-api-key": "pokemon123",
          "Content-Type": "application/json"
        }
      }
    )

    console.log(1);

  }

  return (
    <section id="newsletter" className="section-container px-4 md:px-0">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden"
      >
        <div className="relative md:px-16 px-6 py-16 md:py-24">
          {/* Background Gradient */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"
          ></motion.div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              className="text-white max-w-lg text-center md:text-left"
            >
              <motion.h2
                variants={textVariant(0.3)}
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4"
              >
                Subscribe newsletter
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.6)}
                className="text-blue-100 text-sm sm:text-base"
              >
                Best cooks and best delivery guys all at your service. Hot tasty food
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              className="w-full md:w-auto"
            >
              <motion.div
                variants={fadeIn('up', 0.6)}
                className="flex flex-col  gap-5"
              >
                <motion.input ref={firstname}
                  variants={fadeIn('right', 0.7)}
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-xl rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />

                <motion.input ref={number}
                  variants={fadeIn('right', 0.7)}
                  type="text"
                  placeholder="Номер телефона"
                  className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-xl rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />

                <motion.select ref={paket}
                  variants={fadeIn('right', 0.7)}
                  type="text"
                  className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-xl rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                >

                  <option value="ASOS">ASOS</option>
                  <option value="O'SISH">O'SISH</option>
                  <option value="TA'SIR">TA'SIR</option>

                </motion.select>

                <motion.textarea ref={comment}
                  variants={fadeIn('right', 0.7)}
                  type="text"
                  placeholder="Напиши коментарий"
                  className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-xl rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />


                <motion.button
                  onClick={post}
                  variants={fadeIn('left', 0.7)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl  sm:rounded-r-xl hover:bg-green-600 transition-colors flex items-center justify-center sm:justify-start gap-2"
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
  )
}

export default NewsletterSection
