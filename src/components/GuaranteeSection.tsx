"use client";

import { motion } from "framer-motion";
import ButtonCTA from "./ButtonCTA";
import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
    return (
        <section className="w-full bg-[#111111] border-y border-[#27272a] py-16 px-4 flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full text-center flex flex-col items-center"
            >
                <div className="bg-[#18181b] p-4 rounded-full mb-6 border border-[#3f3f46]">
                    <ShieldCheck className="w-10 h-10 text-[#a1a1aa]" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    Garantia Incondicional de 7 Dias
                </h2>

                <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mb-10 max-w-2xl font-light">
                    O sistema quer você vendado, mas nós queremos você no controle. Entre no portal e assista aos episódios. Se você achar que a verdade exposta nesta série não é para você, basta um único e-mail e nós devolveremos <strong className="text-white font-medium">100% do seu dinheiro</strong>. Sem perguntas burocráticas.
                </p>

                <ButtonCTA text="Destravar Meu Acesso Agora" className="max-w-lg" />
            </motion.div>
        </section>
    );
}
