import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { SITE_DESCRIPTION, SITE_NAME } from "./constants/names";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import LayoutWrapper from "./ui/LayoutWrapper/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
        <LayoutWrapper>
          <Header />
          <main style={{ flex: 1, marginTop: 85 }}>
            <Container>{children}</Container>
          </main>
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
