import React, { useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { AppContext } from "@/AppContext"; // путь к AppContext

const FullscreenLoader = () => {
    const { theme } = useContext(AppContext);
    const { isDark } = theme;

    // Отключаем скролл страницы
    useEffect(() => {
        const prev = {
            overflow: document.body.style.overflow,
            touchAction: document.body.style.touchAction,
        };
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";

        return () => {
            document.body.style.overflow = prev.overflow;
            document.body.style.touchAction = prev.touchAction;
        };
    }, []);

    // Цвета для шариков
    const ballColors = isDark
        ? ["bg-indigo-400", "bg-indigo-500", "bg-indigo-600"]
        : ["bg-blue-400", "bg-blue-500", "bg-blue-600"];

    const overlayBg = isDark ? "bg-black/70" : "bg-white/70";

    const loaderContent = (
        <div
            className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center"
            aria-hidden="true"
        >
            {/* затемняющий фон */}
            <div className={`absolute inset-0 ${overlayBg} backdrop-blur-sm`}></div>

            {/* лоадер */}
            <div className="relative z-10 rounded-2xl px-12 py-10 flex gap-5 items-center justify-center">
                {ballColors.map((color, index) => (
                    <motion.span
                        key={index}
                        className={`w-6 h-6 ${color} rounded-full`}
                        animate={{ y: [0, -14, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: index * 0.12 }}
                    />
                ))}
            </div>
        </div>
    );

    return typeof document !== "undefined" ? createPortal(loaderContent, document.body) : null;
};

export default FullscreenLoader;
