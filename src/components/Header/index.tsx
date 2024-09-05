import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { LinkIcons } from "../LinkIcons";
import { Sidebar } from "../Sidebar/Sidebar";
import Link from "next/link";
import Image from "next/image";

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
          <Link href="/">
            <Image
              width={150}
              height={150}
              src="/Aparbs Dark 10.svg"
              alt="logo da APARBS Soluções Automotivas" />
          </Link>
        </Flex>

        <Flex
          align="center"
          justify="right"
          display={{ md: "flex", base: "none" }}
        >
          <LinkIcons theme="bgRed" />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
