import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "./_components/root/NavBar";
import { Providers } from "./providers";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Pedro Tavares  - Portfolio",
  description: "Portfólio de Engenharia de Software de João Pedro Tavares ",
  icons: {
    icon: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${roboto.className} bg-black text-white`}>
        <Providers>
          <NavBar />
          <main className="pt-2">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
