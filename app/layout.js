import { Montserrat, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "react-phone-number-input/style.css";
import NavBar from "@/components/organisms/NavBar/NavBar";
import Footer from "@/components/organisms/Footer/Footer";
import BookingModal from "@/components/organisms/BookingModal/BookingModal";
import PromoPopup from "@/components/organisms/PromoPopup/PromoPopup";
import { SITE_URL, SITE_NAME, LEGAL_NAME, PHONE, EMAIL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JUC29 Cleaning | House & Office Cleaning in Tampa Bay",
    template: "%s | JUC29 Cleaning",
  },
  description: "Professional house and commercial cleaning in the Tampa Bay area. Deep, recurring, move-in/move-out and post-construction cleaning. Get your free quote.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: "JUC29 Cleaning | House & Office Cleaning in Tampa Bay",
    description: "Professional house and commercial cleaning in the Tampa Bay area. Get your free quote.",
    images: ["/images/logo.png"],
  },
};

// Local business structured data — only facts already published on the site.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaning",
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  areaServed: { "@type": "Place", name: "Tampa Bay, FL" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
