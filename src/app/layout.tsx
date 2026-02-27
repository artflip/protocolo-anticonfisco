import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-geist-sans", // Overriding default geist variable for simplicity
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protocolo Anticonfisco | Acesso Restrito",
  description: "A Janela de Fuga Está Fechando: O Passo a Passo Para Tirar o Seu Patrimônio do Radar Antes do Fim do Papel-Moeda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${interFont.variable} ${robotoMono.variable} antialiased bg-black text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
