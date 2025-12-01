// FullscreenLoader.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const FullscreenLoader = () => {
    // Отключаем скролл страницы, пока лоадер открыт
    useEffect(() => {
        const prev = {
            overflow: document.body.style.overflow,
            touchAction: document.body.style.touchAction,
            
        };
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none"; // чтобы убрать нежелательные свайпы на мобилах

        return () => {
            document.body.style.overflow = prev.overflow;
            document.body.style.touchAction = prev.touchAction;
        };
    }, []);

    const loaderContent = (
        <div
            // важные классы: fixed + inset-0 + w-screen h-screen гарантируют покрытие viewport
            className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center"
            aria-hidden="true"
        >
            {/* затемняющий фон (можно регулировать прозрачность) */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

            {/* белый центрированный блок с лоадером */}
            <div className="relative z-10 rounded-2xl px-12 py-10 flex gap-5 items-center justify-center">
                <motion.span
                    className="w-6 h-6 bg-blue-600 rounded-full"
                    animate={{ y: [0, -14, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
                />
                <motion.span
                    className="w-6 h-6 bg-blue-500 rounded-full"
                    animate={{ y: [0, -14, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.12 }}
                />
                <motion.span
                    className="w-6 h-6 bg-blue-400 rounded-full"
                    animate={{ y: [0, -14, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.24 }}
                />
            </div>
        </div>
    );

    // Рендерим в document.body — тогда никакой родитель не сможет ограничить размер
    return typeof document !== "undefined" ? createPortal(loaderContent, document.body) : null;
};

export default FullscreenLoader;
