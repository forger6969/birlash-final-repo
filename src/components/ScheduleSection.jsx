import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import { useRef, useContext } from "react";
import { useInView } from "framer-motion";
import { AppContext } from '@/AppContext';

const sampleData = [
  { x: "Asos", y: 30 },
  { x: "O'SISH", y: 45 },
  { x: "TA'SIR", y: 60 },
];

const ScheduleSection = () => {
  const { theme } = useContext(AppContext);
  const { isDark } = theme;

  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  // динамические цвета
  const textColor = isDark ? 'text-gray-200' : 'text-gray-800';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const linkColor = isDark ? 'text-teal-400' : 'text-[#008B8B]';
  const chartColor = isDark ? "#22d3ee" : "#C7A964";
  const bgColor = isDark ? 'bg-[#004D57]' : 'bg-white';

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className={`max-w-7xl mx-auto px-4 py-16 md:py-24 transition-colors duration-500 ${bgColor}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

        {/* CHART */}
        <div ref={chartRef} className="w-full md:w-1/2">
          <VictoryChart
            domainPadding={{ x: 50 }}
            theme={VictoryTheme.clean}
            animate={
              isInView
                ? { duration: 1200, easing: "bounce" }
                : undefined
            }
          >
            <VictoryBar
              data={sampleData}
              style={{ data: { fill: chartColor } }}
            />
          </VictoryChart>
        </div>

        {/* Content */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span
            variants={fadeIn('up', 0.4)}
            className={`font-semibold ${linkColor}`}
          >
            TA’SIR
          </motion.span>

          <motion.h2
            variants={textVariant(0.5)}
            className={`text-3xl md:text-xl font-bold mt-4 mb-6 ${textColor}`}
          >
            Biznesingizni Tez O‘sishga Olib <br />
            Chiquvchi Paket
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.6)}
            className={`mb-8 ${subTextColor}`}
          >
            TA’SIR — marketing, moliya, jarayonlar, soliq-huquqiy tuzilma va biznesni kengaytirish bo‘yicha amaliy tizimli yordam beradigan premium paket.
          </motion.p>

          <motion.a
            variants={fadeIn('up', 0.7)}
            href="#newsletter"
            className={`font-semibold flex items-center gap-2 hover:gap-4 transition-all ${linkColor}`}
          >
            Contact
            <motion.svg
              variants={fadeIn('left', 0.8)}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ScheduleSection;
