"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface ButtonCTAProps {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
}

export default function ButtonCTA({ text, onClick, href = "https://pay.kirvano.com/b59d0db0-7cab-406a-ac52-973da1486f3a", className = "" }: ButtonCTAProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            window.location.href = href;
        }
    };

    return (
        <div className={`flex flex-col items-center w-full max-w-md mx-auto ${className}`}>
            <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(22, 163, 74, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-4 px-6 rounded-lg shadow-lg border border-[#22c55e]/30 transition-colors uppercase tracking-wide text-sm sm:text-base flex items-center justify-center gap-2"
            >
                <Lock className="w-5 h-5" />
                {text}
            </motion.button>
            <p className="mt-3 text-[#a1a1aa] text-xs font-mono flex items-center gap-1 opacity-80">
                <Lock className="w-3 h-3" /> Acesso imediato • Pagamento 100% Seguro • Risco Zero
            </p>
        </div>
    );
}
