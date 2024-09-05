import { Card, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";

import { client } from '../../lib/datoClient';
import { GET_POSTS } from '../../lib/queries';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Link from "next/link";


export default function Blog({ posts }) {
  return (
    <Flex direction="column" align="center" justify="center">
      <Flex w="100%" mb="120px">
        <Header />
      </Flex>

      <Flex maxW="1280px"
        align="center"
        justify="center"
        direction="column"
        w="100%"
        px={4}
      >
        <Heading as="h2" color="primary" mb="2rem">
          <a href="#NossosServicos">Blog</a>
        </Heading>

        <Flex w="100%" direction="column" gap={4}>
          {posts.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card
                direction={{base: "column", md: "row"}}
                overflow="hidden"
                _hover={{ boxShadow: "lg",  borderColor:"primary" }}
                transition="0.5s"
                variant="outline"
              >
                <Image
                  src={post.banner.url} alt={post.title}
                  style={{objectFit: "cover", minWidth: "300px"}}
                  width={500}
                  height={500}
                />
                <Stack p={4}>
                    <Heading as="h2" size="md">{post.title}</Heading>
                    <Text
                      noOfLines={5}
                      as="div"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </Stack>
              </Card>
            </Link>
          ))}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export async function getStaticProps() {
  try {
    const data = await client.request(GET_POSTS);
    
    const sortedPosts = data.allPosts.sort((a: any, b: any) => {
      return new Date(b._firstPublishedAt).getDate() - new Date(a._firstPublishedAt).getDate();
    });

    return {
      props: {
        posts: sortedPosts
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        posts: [],
      },
    };
  }
}