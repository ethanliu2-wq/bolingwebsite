'use client';

import { motion } from 'framer-motion';

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.8, // Slower, smoother default
    className = "",
    direction = "up"
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}) {
    const directions = {
        up: { y: 24 }, // Slightly more travel for elegance
        down: { y: -24 },
        left: { x: 24 },
        right: { x: -24 },
        none: {}
    };

    const initial = { opacity: 0, ...directions[direction] };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
