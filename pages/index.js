import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const toast = useToast();
  const router = useRouter();
  const [name, setName] = useState("");
  const [isloading, setLoading] = useState(false);
  const seeFuture = () => {
    if (name === "") {
      toast({
        title: "Enter A Name.",
        description: "Na Jao Beshak, Muje Kia",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (name.toLowerCase() === "abrar") {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("fytresult", "Yes & Fuck U");
        router.push("/result");
        // setLoading(false);
      }, 2000);
    } else if (name.toLocaleLowerCase() === "afaq") {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("fytresult", "Ask Shah G For Permission");
        router.push("/result");
        // setLoading(false);
      }, 2000);
    } else if (name.toLocaleLowerCase() === "baingan") {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("fytresult", "No Baingan");
        router.push("/result");
        // setLoading(false);
      }, 2000);
    } else {
      setLoading(true);
      const reso = Math.floor(Math.random() * 10);
      setTimeout(() => {
        if (reso > 5) {
          localStorage.setItem("fytresult", "Yes!");
        } else if (reso > 3) {
          localStorage.setItem("fytresult", "No");
        } else {
          localStorage.setItem("fytresult", "Maybe You Should");
        }
        router.push("/result");
        // setLoading(false);
      }, 2000);
    }
  };
  return (
    <Box bg="gray.200" h="50vh">
      <Head>
        <title>Should You?</title>
      </Head>
      <Stack p={10} justifyContent="center" alignItems="center">
        <Heading>Should You Go? (FYT)</Heading>
        <Text>Dobara Ni Aega</Text>
        <Input
          value={name}
          onChange={({ target }) => setName(target.value)}
          bg="gray.300"
          w="15rem"
          placeholder="Name"
          size="md"
        />
        <Button
          isLoading={isloading}
          loadingText="Sabar"
          onClick={seeFuture}
          colorScheme="facebook"
        >
          Tell Me!
        </Button>
      </Stack>
    </Box>
  );
}
