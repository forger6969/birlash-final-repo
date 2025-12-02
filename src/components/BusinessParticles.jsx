import { motion } from "framer-motion";

export default function BusinessParticles() {
    const particles = Array.from({ length: 20 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-blue-300/30"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    transition={{
                        duration: 8 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
