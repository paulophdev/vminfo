import Head from "next/head";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>VMINFO</title>
      </Head>

      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
