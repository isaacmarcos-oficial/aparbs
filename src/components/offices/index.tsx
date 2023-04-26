import { Flex, Heading, Box } from "@chakra-ui/react";
import { Services } from "./Services";

export function Offices() {
  return(
    <Flex direction="column" w="100%" align="center" justify="center" bgColor="#fff"  py="3rem">
      <Flex w="100%" direction="column" align="center" justify="center" maxW="1140px" px="2rem" >
        <Heading color="primary" mb="2rem" >
          <a href="#NossosServicos">
            Nossos Serviços
          </a>
        </Heading>
      </Flex>

      <Flex w="100%" maxW="1140px" wrap="wrap" justify={{ lg:"space-between", md: "space-around", base:"space-around"}} gap="1.5rem" px="2rem">
        <Box>
          <Services
            image="https://bit.ly/3LGNvnI"
            description="Mecânica em Geral"
            imageAlt="Mecânica em Geral"
          />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3GfiwOz"
            description="Ar Condicionado"
            imageAlt="Ar Condicionado"
          />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3wEDdAo"
            description="Elétrica Automotiva"
            imageAlt="Elétrica Automotiva"
          />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3sR6Axg"
            description="Injeção Eletrônica"
            imageAlt="Injeção Eletrônica"
          />
        </Box>
        <Box>
          <Services
            image="https://media.istockphoto.com/id/1319354325/pt/foto/refueling-and-pouring-oil-quality-into-the-engine-motor-car-transmission-and-maintenance-gear.jpg?b=1&s=170667a&w=0&k=20&c=0rWXtRIA_8xlzCNQTdCUF1fXc0S1pOcHu6j3YVW2QyQ="
            description="Troca de Óleo"
            imageAlt="Troca de Óleo"
          />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3PEKgQY"
            description="Limpeza de Bico"
            imageAlt=""

          />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3LGJHTD"
            description="Auto Socorro"
            imageAlt="Auto Socorro"
          />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3lAaxSS"
            description="Peças e Baterias"
            imageAlt="Peças e Baterias"
          />
        </Box>
      </Flex>      
    </Flex>
  )
}