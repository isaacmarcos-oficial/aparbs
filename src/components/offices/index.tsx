import { Flex, Heading, Grid, Wrap, Box } from "@chakra-ui/react";
import { Services } from "./Services";

export function Offices() {
  return(
    <Flex direction="column" w="100%" align="center" justify="center" bgColor="#fff"  py="3rem">
      <Flex w="100%" direction="column" align="center" justify="center" maxW="1140px" px="2rem" >
        <Heading color="primary" mb="2rem" >
          Nossos Serviços
        </Heading>
      </Flex>

      <Flex w="100%" maxW="1140px" wrap="wrap" justify={{ lg:"space-between", md: "space-around", base:"space-around"}} gap="1.5rem" px="2rem">
        <Box>
          <Services
            image="https://bit.ly/3LGNvnI"
            description="Mecânica em Geral"
            />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3GfiwOz"
            description="Ar Condicionado"
            />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3wEDdAo"
            description="Elétrica Automotiva"
            />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3sR6Axg"
            description="Injeção Eletrônica"
            />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3LIJLSK"
            description="Troca de Óleo"
            />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3PEKgQY"
            description="Limpeza de Bico"
            />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3LGJHTD"
            description="Auto Socorro"
            />
        </Box>
        <Box>
          <Services
            image="https://bit.ly/3lAaxSS"
            description="Peças e Baterias"
            />
        </Box>
      </Flex>      
    </Flex>
  )
}