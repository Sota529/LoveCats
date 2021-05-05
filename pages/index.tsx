//chakra
import Icon from "@chakra-ui/icon";
import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import { useDisclosure } from "@chakra-ui/hooks";
//axios
import axios from "axios";
//react
import { useEffect } from "react";
import { useState } from "react";
import DetailModal from "../components/Modal";

const Home: React.FC = () => {
  const [datas, setdatas] = useState<string[] | undefined>([]);
  const [count, setcount] = useState<number>(0);
  const { onOpen } = useDisclosure();
  useEffect(() => {
    const fetcher = async () => {
      const result = [];
      const apikey = "x-api-key";
      const res = await axios.get(
        "https://api.thecatapi.com/v1/images/search?size=small&limit=6",
        {
          headers: { [apikey]: "3088e2c8-2d23-4dec-9c47-60596be5e029" },
        }
      );
      for (let i = 0; i < res.data.length; i++) {
        result.push(res.data[i].url);
      }
      setdatas(datas.concat(result));
    };
    fetcher();
  }, [count]);
  return (
    <>
      <Heading as="h1" display="flex" justifyContent="left" alignItems="center">
        <Text>LoveCats</Text>
        <Icon display="inline-block" h="100%">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z" />
        </Icon>
      </Heading>
      {!datas ? (
        <Box textAlign="center">
          <Spinner size="lg" />
        </Box>
      ) : (
        <SimpleGrid
          mt="2em"
          columns={{
            sm: 2,
            md: 3,
          }}
          spacing="10"
        >
          {datas?.map((data) => {
            return (
              <Box key={data} borderRadius="lg" cursor="pointer">
                <DetailModal
                  Component={
                    <Image
                      src={data}
                      boxSize="350px"
                      objectFit="cover"
                      borderRadius="lg"
                      shadow="md"
                      onClick={onOpen}
                    />
                  }
                />
              </Box>
            );
          })}
        </SimpleGrid>
      )}
      <Box textAlign="center" mt="2em">
        <Button
          variant="outline"
          colorScheme="orange"
          onClick={() => {
            setcount((prevValue) => prevValue + 1);
          }}
        >
          More
        </Button>
      </Box>
    </>
  );
};
export default Home;
