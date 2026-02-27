"use client";

import { motion } from "framer-motion";
import ButtonCTA from "./ButtonCTA";

export default function HeroSection() {
    return (
        <section className="w-full flex flex-col items-center text-center mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <div className="inline-block border border-[#3f3f46] rounded-full px-3 py-1 mb-6 bg-[#18181b]/50 backdrop-blur-sm">
                    <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Acesso Restrito
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                    A Janela de Fuga Está Fechando: <span className="text-[#a1a1aa] block mt-1 hover:text-white transition-colors duration-500">O Passo a Passo Para Tirar o Seu Patrimônio do Radar Antes do Fim do Papel-Moeda.</span>
                </h1>
                <p className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl mx-auto font-light leading-relaxed">
                    Uma série documental fechada em <strong className="text-white font-semibold">6 episódios</strong> revelando como blindar o seu dinheiro contra o confisco algorítmico.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-3xl aspect-video bg-[#111] rounded-xl overflow-hidden border border-[#27272a] shadow-2xl mb-10 relative group"
            >
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/WJEGZvumsw4?autoplay=1&controls=1&modestbranding=1&rel=0"
                    title="Protocolo Anticonfisco"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full"
            >
                <ButtonCTA text="Destravar Acesso Aos 6 Episódios Agora" />
            </motion.div>
        </section>
    );
}
