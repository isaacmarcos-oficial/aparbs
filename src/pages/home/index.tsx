import { Flex } from "@chakra-ui/react";
import Hero from "./_components/Hero";
import Destaque from "./_components/Destaque";
import About from "./_components/About";
import Offices from "./_components/Offices";
import Contact from "./_components/Contact";
import Parceiros from "./_components/Parceiros";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Flex w="100%">
        <Header />
      </Flex>
      <Hero />
      <Destaque/>
      <About />
      <Offices />
      <Contact />
      <Parceiros />
      <Footer />
    </Flex>
  );
}

