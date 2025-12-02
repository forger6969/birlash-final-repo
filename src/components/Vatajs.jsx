import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/imgs.png";
import { useTranslation } from "react-i18next";

// background beams
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";

const Hero = () => {
    const { t } = useTranslation();

    const vantaRef = useRef(null);

    useEffect(() => {
        const effect = NET({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xc7a964,
            backgroundColor: 0x004d57,
            points: 12.0,
            maxDistance: 27.0,
            spacing: 20.0,
        });

        return () => effect.destroy();
    }, []);

    return (
        <section
            id="home"
            ref={vantaRef}
            className="relative flex flex-col md:flex-row justify-between items-center 
      px-4 sm:px-6 lg:px-8 pt-44 pb-16 mx-auto overflow-hidden min-h-[650px]"
        >
            <BackgroundBeams className="absolute inset-0 pointer-events-none z-0" />

            {/* LEFT SIDE */}
            <div className="w-full md:w-1/2 space-y-8 relative z-10">
                <motion.h1
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  text-[#C7A964]"
                >
                    {t("hero_item_1_part")}
                    <span className="text-[#008B8B] relative inline-block">
                        {t("hero_item_2_part")}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
                    </span>{" "}
                    {t("hero_item_3_part")}
                </motion.h1>

                <motion.p
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-200 text-lg md:text-xl max-w-xl"
                >
                    {t("hero_description")}
                </motion.p>

                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="flex gap-3 max-w-md"
                >
                    <a href="#newsletter">
                        <button
                            className="
              bg-[#008B8B] 
              text-white
              px-8 py-4
              rounded-xl
              transition-all duration-300
              cursor-pointer
              hover:bg-[#006E6E]
              hover:shadow-[0_6px_20px_rgba(199,169,100,0.35)]
              active:scale-95
            "
                        >
                            {t("hero_contact_us")}
                        </button>
                    </a>
                </motion.div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <motion.img
                src={heroImage}
                alt="Team meeting"
                className="bottom-8 relative z-10 w-[550px] pointer-events-none"

                initial={{ opacity: 0, x: 80, scale: 0 }}      
                whileInView={{ opacity: 1, x: 3, scale: 1 }}       
                viewport={{ once: true, amount: 0.3 }}            
                transition={{ duration: 1.2, ease: "easeOut" }}   


                

            />

        </section>
    );
};

export default Hero;
