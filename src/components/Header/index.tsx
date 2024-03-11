import { Flex, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { LinkIcons } from "../linkIcons";
import { Sidebar } from "../Sidebar/Sidebar";

export function Header() {
  return (
    <Flex
      position="fixed"
      top="0"
      align="center"
      justify="center"
      h="66px"
      w="100%"
      bg="primary"
      zIndex="999"
    >
      <SimpleGrid
        columns={{ lg: 3, md: 3, base: 3 }}
        maxW="1280px"
        w="100%"
        m={{ lg: "32px", base: "32px" }}
        alignItems="center"
      >
        <Sidebar />

        <Flex
          align="center"
          justify={{ lg: "center", md: "center", base: "right" }}
        >
          <a href="/">
            <Img src="/Aparbs Dark 10.svg" h="35px" alt="logo APARBS" />
          </a>
        </Flex>

        <Flex
          align="center"
          justify="right"
          display={{ md: "flex", base: "none" }}
        >
          <LinkIcons />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
