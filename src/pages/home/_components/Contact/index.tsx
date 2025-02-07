import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { LinkIcons } from "../../../../components/LinkIcons";

export default function Contact() {
  return (
    <Flex direction="column" w="100%" align="center" justify="center" >
      <Flex
        maxW="1280px"
        align="center"
        justify="center"
        direction="column"
        w="100%"
      >
        <Flex w="100%">
          <Grid
            templateColumns={{lg:"repeat(3,1fr)", md:"repeat(3,1fr)", base:"repeat(1, 1fr)"}}
            maxH={{ base: "400px", lg: "600px" }}
            w="100%"
          >
            <GridItem colSpan={2}>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                p="8"
                bgColor="primary"
              >
                <Flex>
                  <Heading as="h2" mb="1rem" color="terciary">
                    <a href="#faleconosco">FALE CONOSCO</a>
                  </Heading>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  mb="3rem"
                >
                  <Flex mb="0.5rem" gap="1rem">
                    <LinkIcons theme="bgRed"/>
                  </Flex>
                  <Link
                    href="tel:+553832208767"
                    style={{ textDecoration: "none" }}
                    isExternal
                  >
                    <Text
                      color="terciary"
                      _hover={{ color: "secundary" }}
                      transition="0.3s"
                      fontWeight="600"
                      fontSize={{ base: "1.25rem", lg: "1.3rem" }}
                    >
                      (38) 3220-8767
                    </Text>
                  </Link>
                </Flex>

                <Flex>
                  <Heading mb="6" color="terciary">
                    VISITE-NOS
                  </Heading>
                </Flex>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  w={{ base: "80%", lg: "60%" }}
                >
                  <Button
                    as={Link}
                    style={{ textDecoration: "none" }}
                    href="https://www.google.com/maps/dir//aparbs+porteirinha/@-15.755457,-43.0466363,14.17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x752281b048ee24b:0x8ce9b567298b1724!2m2!1d-43.0311318!2d-15.7536274?hl=pt-br"
                    target="_blank"
                    leftIcon={<FaMapMarkerAlt />}
                    bgColor="terciary"
                    w="100%"
                    mb="2"
                    color="primary"
                    _hover={{ color: "secundary" }}
                    transition="0.3s"
                  >
                    <Text fontSize={{ base: "0.75rem", lg: "1rem" }}>
                      APARBS Porteirinha/MG
                    </Text>
                  </Button>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem colSpan={1}>
              <Box
                display={{ base: "none", md:"flex", lg: "flex" }}
                w="100%"
                h="100%"
                position="relative"
              >
                <Image
                  width={500}
                  height={500}
                  loading="lazy"
                  quality={50}
                  src="/Camada 2.jpg"
                  alt="Alaelton Vieira, Alaídes Vieira, Arthur Vieira e Aldiney Vieira, diretores da oficina mecânica APARBS Soluções Automotivas de Porteirinha/MG e Riacho dos Machados/MG"
                  style={{ objectFit: "cover", objectPosition: "80% top" }}
                />
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}
