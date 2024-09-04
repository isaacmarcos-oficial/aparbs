import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { Ri24HoursLine } from "react-icons/ri";
import { IoRocketSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTools } from "react-icons/fa";

export function Destaque() {
  return (
    <Flex px={{ lg: "none", md:"8", base: "4" }}
    w="100%" align="center" justify="center"
    >
      <Grid
        templateColumns="repeat(4, 1fr)"
        color="terciary"
        w="100%"
        maxW="1280px"
        py="10"
        mt={4}
        bgColor="primary"
        rounded={10}
      >
        <GridItem>
          <Flex align="center" justify="center" direction="column" gap="2">
            <Icon as={Ri24HoursLine} boxSize={{lg:"40px", base:"25px"}} />
            <Heading fontSize={{lg:"16px", base:"10px" }} textAlign="center">
              Auto Socorro <br /> 24horas
            </Heading>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex align="center" justify="center" direction="column" gap="2">
            <Icon as={IoRocketSharp} boxSize={{lg:"40px", base:"25px"}} />
            <Heading fontSize={{lg:"16px", base:"10px" }} textAlign="center">
              Serviço rápido
            </Heading>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex align="center" justify="center" direction="column" gap="2">
            <Icon as={MdOutlineSecurity} boxSize={{lg:"40px", base:"25px"}} />
            <Heading fontSize={{lg:"16px", base:"10px" }} textAlign="center">
              Serviço seguro
            </Heading>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex align="center" justify="center" direction="column" gap="2">
            <Icon as={FaTools} boxSize={{lg:"40px", base:"25px"}} />
            <Heading fontSize={{lg:"16px", base:"10px" }} textAlign="center">
              Profissionais <br /> especializados
            </Heading>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
