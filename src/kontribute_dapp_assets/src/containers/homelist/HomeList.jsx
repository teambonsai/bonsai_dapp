import React from "react";
import "./homelist.css";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  SimpleGrid,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { FcUpload, FcPicture, FcVoicePresentation } from "react-icons/fc";
import GeneralAlert from "../../pages/components/GeneralAlert";

// the main home section of the dapp

// for the features
const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color="#c8aa6e">
        {title}
      </Text>
      <Text color="#f0e6d3">{text}</Text>
    </Stack>
  );
};

const HomeList = () => {
  return (
    <div className="home_list_container">
      <Container maxW={"3xl"}>
        <GeneralAlert />
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 32 }}
          mb="6"
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Welcome to <br />
            <Text
              as={"span"}
              bgGradient="linear(to-t, #705025, #a7884a)"
              bgClip="text"
            >
              Kontribute
            </Text>
          </Heading>
          <Text color="#f0e6d3">
            Kontribute is an interactive dapp built on the Internet Computer
            Protocol (ICP). Kontribute brings readers, writers and NFTs
            together. Check out the Bonsai Warriors story and accompanying NFT
            collection
          </Text>
          <Stack
            direction={"row"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="stories/bonsai-all">
              <Button
                colorScheme="#282828"
                bg="#282828"
                rounded={"full"}
                px={6}
                size={useBreakpointValue(["sm", "md"])}
              >
                Bonsai Story
              </Button>
            </Link>
            <Link to="/launchpad/bonsai-nft">
              <Button
                colorScheme="#282828"
                bg="#282828"
                rounded={"full"}
                px={6}
                size={useBreakpointValue(["sm", "md"])}
              >
                Bonsai NFT
              </Button>
            </Link>
          </Stack>
        </Stack>
        {/* feature: */}
        <div className="bonsai_features">
          <Box p={4} mb={10}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FcUpload} w={10} h={10} />}
                title={"Community Stories"}
                text={
                  "Kontribute will allow users to upload their own non-fiction/fiction stories to the dapp. Stories will be all fully stored on the ICP blockchain."
                }
              />
              <Feature
                icon={<Icon as={FcPicture} w={10} h={10} />}
                title={"NFT Integration"}
                text={
                  "See characters, places or anything else that is mentioned in a story in the form of an NFT. Own a piece of your favorite story through our NFT Anvil integration."
                }
              />
              <Feature
                icon={<Icon as={FcVoicePresentation} w={10} h={10} />}
                title={"Voting"}
                text={
                  "Readers choose the future of stories through integrated voting on the next evolution. Choose the fate of your favourite character."
                }
              />
            </SimpleGrid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default HomeList;
