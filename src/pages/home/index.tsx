import { Flex } from "@chakra-ui/react";
import Hero from "./_components/Hero";
import Destaque from "./_components/Destaque";
import About from "./_components/About";
import Offices from "./_components/Offices";
import Contact from "./_components/Contact";
import Parceiros from "./_components/Parceiros";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { client } from "../../lib/datoClient";
import { GET_PARTNERS } from "../../lib/queries";

export async function getStaticProps() {
  try {
    const data = await client.request(GET_PARTNERS);

    if (!data || !data.allPartners) {
      throw new Error('');
    }

    return {
      props: {
        partners: data.allPartners,
      },
    };
  } catch (error) {
    return {
      props: {
        partners: [],
      },
    };
  }
}

export default function Home({ partners }) {
  
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
      <Parceiros partners={partners} />
      <Footer />
    </Flex>
  );
}

