export default function Footer() {
    return (
        <footer className="w-full py-8 bg-[#0a0a0a] text-[#52525b] text-xs font-mono text-center border-t border-[#18181b]">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4 justify-center opacity-80 hover:opacity-100 transition-opacity">
                <p>© 2026 Protocolo Anticonfisco. Todos os direitos reservados.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-[#a1a1aa] transition-colors border-b border-transparent hover:border-[#a1a1aa]">Termos de Uso</a>
                    <span>|</span>
                    <a href="#" className="hover:text-[#a1a1aa] transition-colors border-b border-transparent hover:border-[#a1a1aa]">Políticas de Privacidade</a>
                </div>
            </div>
        </footer>
    );
}
