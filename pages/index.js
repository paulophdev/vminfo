import Head from "next/head";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappFlut from "./components/WhatsappFlut";

export default function Home() {
  return (
    <>
      <Head>
        <title>VMINFO</title>
      </Head>

      <Navbar />
      <Carousel />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsappFlut />
    </>
  );
}
