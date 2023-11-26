import "./globals.css";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";

export const metadata = {
  title: "رحلاتي | سافر معنا إلى العالم",
  description: "موقع شركة أسفار و رحلات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/logo.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
