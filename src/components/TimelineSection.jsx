import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TimelineSection({ bgImage = "/world-map.png" }) {
    const years = [
        { year: "2026", cities: ["Samarqand", "Buxoro", "Xorazm", "Farg'ona"] },
        { year: "2027", cities: ["Almata", "Astana", "Moskva"] },
        { year: "2028", cities: ["Dubai", "Ankara"] },
    ];

    // track which column is active
    const [active, setActive] = useState(null);

    const createParticles = (n, seed) =>
        new Array(n).fill(0).map((_, i) => ({
            id: `${seed}-${i}`,
            angle: (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.3,
            dist: 12 + Math.random() * 18,
            size: 3 + Math.random() * 4,
            delay: Math.random() * 0.18,
        }));

    const particlesMemo = useMemo(
        () => years.map((y, yi) => y.cities.map((c, ci) => createParticles(6, `${yi}-${ci}`))),
        []
    );

    const listContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.05 } },
        exit: { opacity: 0 },
    };

    const listItem = {
        hidden: { opacity: 0, y: 10, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 180, damping: 18 } },
        exit: { opacity: 0, y: 6, transition: { duration: 0.18 } },
    };

    return (
        <section className="relative bg-white border border-slate-200 rounded-lg overflow-hidden">
            {/* header */}
            <div className="px-6 md:px-12 py-6 md:py-8 flex items-center justify-between">
                <h2 className="text-lg md:text-2xl font-extrabold tracking-tight text-slate-900">
                    BIZNING KENG KO’LAMLI REJALARIMIZ
                </h2>
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shadow">
                    B
                </div>
            </div>

            {/* main area */}
            <div className="relative bg-slate-50/60">
                {/* map background */}
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-30 pointer-events-none"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />

                {/* years bar */}
                <div className="relative mx-6 md:mx-12">
                    <div className="bg-slate-900 text-white rounded-sm">
                        <div className="grid grid-cols-3 gap-4 md:gap-8 px-4 md:px-8 py-5 md:py-6 text-center font-semibold text-sm md:text-lg">
                            {years.map((y, i) => (
                                <button
                                    key={y.year}
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    onBlur={() => setActive(null)}
                                    onClick={() => setActive(active === i ? null : i)}
                                    className="relative flex items-center justify-center px-2 py-1 outline-none"
                                    aria-expanded={active === i}
                                >
                                    <motion.span whileHover={{ scale: 1.03 }} transition={{ duration: 0.15 }}>
                                        {y.year}
                                    </motion.span>

                                    <motion.div
                                        layoutId="year-indicator"
                                        initial={false}
                                        animate={active === i ? { opacity: 1, scaleX: 1 } : { opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* content grid (columns) */}
                <div className="mx-6 md:mx-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 py-8 md:py-12">
                    {years.map((col, colIndex) => (
                        <div
                            key={col.year}
                            className="relative"
                            onMouseEnter={() => setActive(colIndex)}
                            onMouseLeave={() => setActive(null)}
                        >
                            {/* vertical rule */}
                            <div className="absolute left-5 md:left-7 top-0 bottom-0 flex items-start">
                                <div className="w-px bg-slate-300 h-full" />
                            </div>

                            <div className="pl-14 md:pl-20">
                                {/* animated list */}
                                <AnimatePresence>
                                    {active === colIndex && (
                                        <motion.ul
                                            key={`list-${colIndex}`}
                                            variants={listContainer}
                                            initial="hidden"
                                            animate="show"
                                            exit="exit"
                                            className="space-y-4"
                                        >
                                            {col.cities.map((city, ci) => (
                                                <motion.li key={city} variants={listItem} className="flex items-center gap-3">
                                                    {/* marker */}
                                                    <div className="relative w-6 h-6 flex items-center justify-center">
                                                        {particlesMemo[colIndex][ci].map((p) => (
                                                            <motion.span
                                                                key={p.id}
                                                                initial={{ opacity: 0, x: 0, y: 0, scale: 0.2 }}
                                                                animate={{
                                                                    opacity: [0, 0.9, 0],
                                                                    x: Math.cos(p.angle) * p.dist,
                                                                    y: Math.sin(p.angle) * p.dist,
                                                                    scale: [0.2, 1, 0.2],
                                                                }}
                                                                transition={{ duration: 0.7, delay: p.delay + ci * 0.02 }}
                                                                style={{ width: p.size, height: p.size }}
                                                                className="absolute rounded-full bg-teal-200/70"
                                                            />
                                                        ))}
                                                        <motion.span
                                                            initial={{ scale: 0.8 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                            className="block w-3 h-3 rounded-full bg-teal-500 shadow-sm"
                                                        />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <motion.div className="font-semibold text-slate-900 text-sm md:text-base truncate">
                                                            {city.toUpperCase()}
                                                        </motion.div>
                                                        <motion.div className="text-xs text-slate-500">Приоритетный филиал</motion.div>
                                                    </div>

                                                    <div className="hidden md:flex">
                                                        <button className="text-xs px-3 py-1 rounded-full border border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold">
                                                            Подробнее
                                                        </button>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>

                                {/* description */}
                                <motion.p
                                    animate={{ opacity: active === colIndex ? 0.24 : 1 }}
                                    transition={{ duration: 0.28 }}
                                    className="mt-8 text-slate-700 font-semibold text-sm md:text-base leading-snug"
                                >
                                    QAYERDA BO’LSANGIZ XAM BARCHA FILLIALARIMGA KIRISH IMKONIYATI BO’LADI. BARCHA FILLIALARIMIZ O’ZBEK TILIDA O’ZBEKLAR UCHUN.
                                </motion.p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* page badge */}
                <div className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shadow-lg">
                    5
                </div>
            </div>
        </section>
    );
}
