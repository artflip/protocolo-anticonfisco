"use client";

import { motion } from "framer-motion";
import { LockOpen, Shield, ShieldOff, EyeOff, Coins, Wallet, ServerOff } from "lucide-react";

export default function DeliverablesGrid() {
    const episodes = [
        {
            num: 1,
            title: "A Anatomia do Confisco",
            desc: "Como as novas moedas digitais (CBDCs) foram programadas para rastrear você.",
            icon: <EyeOff className="w-6 h-6 text-[#991b1b]" />,
        },
        {
            num: 2,
            title: "O Desmame Bancário",
            desc: "O passo a passo para reduzir sua dependência dos grandes bancos em 48 horas.",
            icon: <ServerOff className="w-6 h-6 text-[#a1a1aa]" />,
        },
        {
            num: 3,
            title: "O Refúgio Milenar",
            desc: "Como comprar, transportar e guardar Ouro e Prata físicos de forma totalmente anônima.",
            icon: <Coins className="w-6 h-6 text-[#eab308]" />,
        },
        {
            num: 4,
            title: "A Rota de Fuga Digital",
            desc: "O uso prático de carteiras frias e do verdadeiro Bitcoin inconfiscável.",
            icon: <Wallet className="w-6 h-6 text-[#f97316]" />,
        },
        {
            num: 5,
            title: "A Economia Tangível",
            desc: "Como converter a inflação em ativos reais de sobrevivência e criar uma economia paralela.",
            icon: <Shield className="w-6 h-6 text-[#16a34a]" />,
        },
        {
            num: 6,
            title: "O Manual da Invisibilidade",
            desc: "Táticas de privacidade digital para sumir do radar dos algoritmos do governo.",
            icon: <LockOpen className="w-6 h-6 text-[#a1a1aa]" />,
        },
    ];

    return (
        <section className="w-full mt-10 sm:mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-8 pl-2 border-l-4 border-[#3f3f46]"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
                    O Dossiê Completo:
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {episodes.map((ep, idx) => (
                    <motion.div
                        key={ep.num}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-[#111111] p-6 rounded-xl border border-[#27272a] hover:border-[#3f3f46] transition-colors relative group overflow-hidden"
                    >
                        {/* Subtle glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="flex items-start gap-4 reltive z-10">
                            <div className="mt-1 flex-shrink-0 bg-[#0a0a0a] p-3 rounded-lg border border-[#3f3f46] group-hover:border-[#52525b] transition-colors">
                                {ep.icon}
                            </div>
                            <div>
                                <span className="text-[#52525b] font-mono text-xs uppercase font-semibold block mb-1">
                                    Episódio {ep.num}
                                </span>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#e4e4e7] transition-colors">
                                    {ep.title}
                                </h3>
                                <p className="text-[#a1a1aa] text-sm leading-relaxed">
                                    {ep.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
