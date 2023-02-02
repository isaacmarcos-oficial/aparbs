import { Flex, Link } from "@chakra-ui/react";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Hero } from "../components/Hero";
import { Offices } from "../components/offices";

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center">      
      <title>APARBS Soluções Automotivas</title>
      
      <Hero />
      <Offices />
      <About />
      <Contact />
    </Flex>
  )
}