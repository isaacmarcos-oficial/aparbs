import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { client } from '../../lib/datoClient';
import { GET_POST_BY_ID, GET_POSTS } from '../../lib/queries';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from './postContent.module.css';

export default function Post({ post }) {
  if (!post) return <p>Post não encontrado</p>;

  return (
    <Flex direction="column" align="center" justify="center">
      <Flex w="100%" pb="120px">
        <Header />
      </Flex>

      <Flex maxW="1000px"
        align="center"
        justify="center"
        direction="column"
        w="100%"
        px={{ base: "4", md: "8", lg: "0" }}
      >
        <Heading as="h2" pb={4} textAlign="center" fontSize="2rem" color="primary">
              {post.title}
            </Heading>
          <Image
            src={post.banner.url} alt={post.title}
            style={{objectFit: "cover", width: "100%", maxHeight: "300px", borderRadius: "20px"}}
            width={500}
            height={500}
          />
          <Stack pt={4}>
            <Text
              className={styles.postContent}
              as="div"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Stack>
      </Flex>

      <Footer />
    </Flex>
  );
}

export async function getStaticPaths() {
  try {
    const data = await client.request(GET_POSTS);
    const paths = data.allPosts.map(post => ({
      params: { slug: post.slug }
    }));
    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const data = await client.request(GET_POST_BY_ID, { slug: params.slug });
    return {
      props: {
        post: data.post,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        post: null,
      },
    };
  }
}
