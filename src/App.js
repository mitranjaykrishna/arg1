import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componenst/Home";
import NavBar from "./componenst/NavBar";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Footer from "./componenst/Footer";
import Certificate from "./componenst/Certificates";
import Admin1 from "./componenst/Admin/Admin";
import CertificateAdd from "./componenst/Admin/CertificateAdd";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#3282AD",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exatct path="/" element={<Home />} />
            <Route exatct path="/services" element={<Certificate />} />
            <Route exatct path="/admin" element={<Admin1 />} />
            <Route exatct path="/certificateSave" element={<CertificateAdd />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
