import Footer from "./components/Footer";
import NavbarWithCustomGif from "./components/NavbarWithCustomGif";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        <NavbarWithCustomGif/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
