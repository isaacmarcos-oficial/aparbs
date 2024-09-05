import {
  Text,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
  DrawerBody,
  Box,
  Icon,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { ImMenu } from "react-icons/im";
import { LinkIcons } from "../LinkIcons";
import Image from "next/image";

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex color="terciary">
      <Box onClick={onOpen} _hover={{ color: "secundary" }} cursor="pointer">
        <a ref={btnRef} href="#" aria-label="Abrir menu">
          <Icon as={ImMenu} boxSize="20px" />
        </a>
      </Box>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent
          bgColor="primary"
          color="terciary"
          h="100%"
          borderRight="4px"
          borderColor="primary"
          borderStyle="outset"
        >
          <DrawerCloseButton color="secundary" _hover={{ bg:"none", color:"terciary" }} />
          <DrawerHeader>
            <Flex align="center" justify="center" mt="60px">
              <Image
                width={150}
                height={100}
                src="/Aparbs Dark 3.svg"
                alt="APARBS Soluções Automotivas" />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              align="center"
              justify="center"
              px="40px"
              w="100%"
              mb="48px"
            >
              <Text
                w="100%"
                fontSize="14px"
                textTransform="uppercase"
                textAlign="center"
                letterSpacing=".1187rem"
                lineHeight="21px"
                fontStyle="oblique"
                mb="48px"
              >
                O CENTRO AUTOMOTIVO QUE <br /> SEU CARRO SE SENTE SEGURO
              </Text>

              <Flex direction="column" w="100%" align="center" mb="48px">
                <Text
                  color="terciary"
                  w="100%"
                  fontWeight="bold"
                  mb="12px"
                  fontSize="24px"
                  letterSpacing="1.6px"
                  align="center"
                >
                  Fale Conosco
                </Text>

                <Flex mb="32px" gap="16px">
                  <LinkIcons theme="bgRed" />
                </Flex>
              </Flex>

              <Flex
                w="100%"
                bgColor="terciary"
                py="16px"
                borderRadius="48px 0px 48px 0px "
              >
                <Text
                  w="100%"
                  fontWeight="600"
                  fontSize="md"
                  textAlign="center"
                  letterSpacing="1.6px"
                  color="secundary"
                >
                  Venha tomar <br /> um café conosco!
                </Text>
              </Flex>

              <Link href="/blog" w="100%">
                <Button w="100%" mt="1.875rem">
                  Conheça nosso blog
                </Button>
              </Link>

              <Heading
                w="100%"
                mt="1.875rem"
                fontWeight="800"
                fontSize="md"
                letterSpacing="1.6px"
                color="terciary"
              >
                Porteirinha/MG
              </Heading>
              <Text
                w="100%"
                mt=".25rem"
                fontWeight="300"
                fontSize="sm"
                letterSpacing="1.6px"
              >
                Avenida Dalton Cunha, 201 <br />
                Bairro Eldorado <br />
              </Text>

              <Heading
                w="100%"
                mt="1.875rem"
                fontWeight="800"
                fontSize="md"
                letterSpacing="1.6px"
                color="terciary"
              >
                Riacho dos Machados/MG
              </Heading>
              <Text
                w="100%"
                mt=".25rem"
                fontWeight="300"
                fontSize="sm"
                letterSpacing="1.6px"
              >
                Avenida Salviana Alves da Cruz, 70 <br />
                Bairro Lourdes <br />
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
