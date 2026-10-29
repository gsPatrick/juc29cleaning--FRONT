import { Montserrat, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "react-phone-number-input/style.css";
import NavBar from "@/components/organisms/NavBar/NavBar";
import Footer from "@/components/organisms/Footer/Footer";
import BookingModal from "@/components/organisms/BookingModal/BookingModal";
import PromoPopup from "@/components/organisms/PromoPopup/PromoPopup";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "JUC29 Cleaning | Premium Residential & Commercial Cleaning Tampa",
  description: "Professional, reliable, and premium house and office cleaning services in the Tampa Bay area. Experience a spotless space today. Get your free quote!",
  keywords: ["cleaning services Tampa", "house cleaning Tampa", "office cleaning Tampa", "deep cleaning", "JUC29 Cleaning"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable}`}>
      <body>
        <NavBar />
        {children}
        <Footer />
        <BookingModal />
        <PromoPopup />
        {/* Housecall Pro chat bubble */}
        <Script
          id="housecall-pro-chat-bubble"
          src="https://chat.housecallpro.com/proChat.js"
          strategy="afterInteractive"
          data-color="#b1dd8c"
          data-organization="dbd67f80-d99d-4d89-ac0e-09d45f33b5b4"
        />
      </body>
    </html>
  );
}
