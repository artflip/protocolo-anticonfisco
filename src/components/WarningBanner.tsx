"use client";

import { motion } from "framer-motion";

export default function WarningBanner() {
    return (
        <div className="w-full bg-[#991b1b] text-white py-2 px-4 shadow-[0_0_15px_rgba(153,27,27,0.5)] z-50 sticky top-0">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto flex items-center justify-center text-center"
            >
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider">
                    ⚠️ ALERTA DE SEGURANÇA: Este portal de acesso é restrito e o link pode ser desativado a qualquer momento.
                </span>
            </motion.div>
        </div>
    );
}
