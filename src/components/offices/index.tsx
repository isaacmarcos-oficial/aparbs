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
        <Heading color="primary" mb="2rem">
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
              //image="https://bit.ly/3LGNvnI"
              title="Mecânica em Geral"
              description="Da troca de peças à reparação complexa."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaRegSnowflake}
              //image="https://bit.ly/3GfiwOz"
              title="Ar Condicionado"
              description="Ar condicionado é mais do que um luxo, é uma necessidade."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaBolt}
              //image="https://bit.ly/3wEDdAo"
              title="Elétrica Automotiva"
              description="Problemas elétricos podem ser desafiadores, mas é nossa perícia."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaMicrochip}
              //image="https://bit.ly/3sR6Axg"
              title="Injeção Eletrônica"
              description="O coração do seu carro merece cuidado especial."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={RiOilFill}
              //image="https://media.istockphoto.com/id/1319354325/pt/foto/refueling-and-pouring-oil-quality-into-the-engine-motor-car-transmission-and-maintenance-gear.jpg?b=1&s=170667a&w=0&k=20&c=0rWXtRIA_8xlzCNQTdCUF1fXc0S1pOcHu6j3YVW2QyQ="
              title="Troca de Óleo"
              description="Um motor saudável começa com um óleo saudável."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaSprayCan}
              //image="https://reparadorsa.com.br/wp-content/uploads/2022/01/RSA_MATERIA_03_01.jpg"
              title="Limpeza de Bico"
              description="Bicos entupidos podem comprometer o desempenho do seu veículo."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={BsTruckFlatbed}
              //image="https://bit.ly/3LGJHTD"
              title="Auto Socorro"
              description="Nosso serviço de guincho 24h garante que você não fique na estrada."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaCarBattery}
              //image="https://bit.ly/3lAaxSS"
              title="Peças e Baterias"
              description="Peças e baterias de alta qualidade são a espinha dorsal de nosso serviço."
            />
          </GridItem>
          <GridItem>
            <Services
              serviceIcon={FaCouch}
              //image="https://img.freepik.com/fotos-premium/sala-de-espera-e-recepcao-em-clinica-medica-com-sofas-confortaveis_124507-42509.jpg"
              title="Sala de espera"
              description="Enquanto cuidamos do seu veículo, relaxe em nossa acolhedora sala de espera."
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
