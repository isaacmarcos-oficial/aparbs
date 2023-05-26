import { Flex, Link } from "@chakra-ui/react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Hero } from "../components/Hero";
import { Offices } from "../components/offices";
import { Parceiros } from "../components/parceiros";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center">      
      <Flex w="100%"  >
      <Header />
      </Flex>
      <Hero />
      <Offices />
      <About />
      <Parceiros />
      <Contact />
      <Footer />
    </Flex>
  )
}