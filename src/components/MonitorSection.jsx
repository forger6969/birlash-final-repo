import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import 'swiper/css';
import 'swiper/css/navigation';
import monitorCardBg from '../assets/monitor-card.webp';

const MonitorSection = () => {

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Content */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span
            variants={fadeIn('up', 0.4)}
            className="text-[#C7A964] font-semibold"
          >
            BIZNING KENG KO'LAMLI REJALARIMIZ
          </motion.span>
          <motion.h2
            variants={textVariant(0.5)}
            className="text-xl text-[#004D57] md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5"
          >
            O'ZBEK HAMJAMIYATLARI BILAN ALOQALAR
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            className="text-[13px] text-gray-600 mb-8 md:w-4/5"
          >
            BARCHA DAVLATLARDAGI SAVDO
            ATASHELARIMIZ BILAN TO'G'RIDAN-TO'G'RI
            ALOQALAR
            <br /> <br /> 
            
            BARCHA FILLIALARIMIZ O'ZBEK TILIDA O'ZBEKLAR UCHUN
            <br /> <br /> 

            QAYERDA BO'LSANGIZ XAM BARCHA FILLIALARIMIZGA KIRISH IMKONIYATI BO'LADI.
          </motion.p>
         
        </motion.div>

        {/* Right side - Swiper with background */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="p-4"
          >
            <motion.img
              variants={fadeIn('up', 0.5)}
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default MonitorSection 