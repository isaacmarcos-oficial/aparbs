import { Flex, Heading, GridItem, Grid, Img, Link } from "@chakra-ui/react";
import { Services } from "./Services";
import { RiOilFill } from "react-icons/ri";
import {
  FaCouch,
  FaCarBattery,
  FaRegSnowflake,
  FaBolt,
  FaMicrochip,
  FaSprayCan,
  FaWrench,
} from "react-icons/fa";
import { BsTruckFlatbed } from "react-icons/bs";
import { arCondicionado, autoPecas, autoSocorro, eletrica, injecao, limpezaBico, mecanicaGeral, salaEspera, trocaOleo } from "./officeModal";

export function Offices() {
  return (
    <Flex direction="column" w="100%" align="center" justify="center" py="2rem">
      <Flex
        w="100%"
        maxW="1280px"
        px={{ base: "4", md: "4", lg: "0" }}
        direction="column"
        align="center"
        justify="center"
      >
        <Heading as="h2" color="primary" mb="2rem">
          <a href="#NossosServicos">Nossos Serviços</a>
        </Heading>
      </Flex>

      <Flex gap={5} px={{ base: "4", md: 8, lg: "0" }} w="100%" maxW="1280px">
        <Grid
          w="100%"
          maxW="1280px"
          rowGap="1.5rem"
          columnGap="3rem"
          templateColumns={{
            lg: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
        >
          <GridItem>
            <Services
              serviceIcon={FaWrench}
              title="Mecânica em Geral"
              description="Da troca de peças à reparação complexa."
              checklist={mecanicaGeral}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaRegSnowflake}
              title="Ar Condicionado"
              description="Ar condicionado é mais do que um luxo, é uma necessidade."
              checklist={arCondicionado}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaBolt}
              title="Elétrica Automotiva"
              description="Problemas elétricos podem ser desafiadores, mas é nossa perícia."
              checklist={eletrica}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaMicrochip}
              title="Injeção Eletrônica"
              description="O coração do seu carro merece cuidado especial."
              checklist={injecao}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={RiOilFill}
              title="Troca de Óleo"
              description="Um motor saudável começa com um óleo saudável."
              checklist={trocaOleo}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaSprayCan}
              title="Limpeza de Bico"
              description="Bicos entupidos podem comprometer o desempenho do seu veículo."
              checklist={limpezaBico}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={BsTruckFlatbed}
              title="Auto Socorro"
              description="Nosso serviço de guincho 24h garante que você não fique na estrada."
              checklist={autoSocorro}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaCarBattery}
              title="Peças e Baterias"
              description="Peças e baterias de alta qualidade são a espinha dorsal de nosso serviço."
              checklist={autoPecas}
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaCouch}
              title="Sala de espera"
              description="Enquanto cuidamos do seu veículo, relaxe em nossa acolhedora sala de espera."
              checklist={salaEspera}
            />
          </GridItem>
          <GridItem>
            <Flex w="100%" align="center" justify="center">
              <Link
                href="https://api.whatsapp.com/send?phone=553832208767&text=Ol%C3%A1%2C%20estou%20no%20site%20da%20APARBS.%20Gostaria%20de%20receber%20atendimento"
                target="_blank"
                h="40px"
                p="2"
                w="100%"
                alignItems="center"
                justifyContent="center"
                color="primary"
                _hover={{ bg: "primary", color: "terciary" }}
                border="2px solid"
                borderColor="primary"
                rounded="md"
                transition="0.5s"
                textAlign="center"
              >
                Faça o seu agendamento
              </Link>
            </Flex>
          </GridItem>
        </Grid>
        <Flex maxW="33%" w="100%" display={{ base: "none", md: "flex" }}>
          <Img src="/Arthur-Reception.png" objectFit="contain" />
        </Flex>
      </Flex>
    </Flex>
  );
}
