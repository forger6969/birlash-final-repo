import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import { useRef } from "react";
import { useInView } from "framer-motion";

const year = new Date().getFullYear();



const sampleData = [
  { x: (year - 3).toString(), y: 20 },
  { x: (year - 2).toString(), y: 40 },
  { x: (year - 1).toString(), y: 30 },
  { x: year.toString(), y: 60 },
];

const ScheduleSection = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

        {/* CHART — scroll bo‘lganda animatsiya */}
        <div ref={chartRef} className="w-full md:w-1/2">
          <VictoryChart
            domainPadding={{ x: 20 }}
            theme={VictoryTheme.clean}
            animate={
              isInView
                ? { duration: 1200, easing: "bounce" }
                : undefined
            }
          >
            <VictoryBar
              data={sampleData}
              style={{ data: { fill: "#C7A964" } }}
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
            className="text-[#C7A964] font-semibold"
          >
            BIRLASH MISSIYASI
          </motion.span>

          <motion.h2
            variants={textVariant(0.5)}
            className="text-3xl md:text-xl font-bold mt-4 mb-6"
          >
            BIZ TADBIRKORLARNI, TA'LIM VA INVESTITSIYALARNI <br />
            BIRLASHTIRAMIZ, G'OYALAR BIZNESGA
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-8"
          >
            BIRLASH — kuchli va barqaror yangi avlod bizneslari uchun amaliyotchilar maskani. Bu yerda har bir a’zo motivatsiya emas, balki haqiqiy o‘sish vositalari, resurslar va aloqalarni qo‘lga kiritadi.
          </motion.p>

          <motion.a
            variants={fadeIn('up', 0.7)}
            href="#newsletter"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
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
