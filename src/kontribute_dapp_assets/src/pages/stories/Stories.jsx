import React, { useEffect, useState } from "react";
import {
  Heading,
  SimpleGrid,
  Stack,
  Button,
  Container,
  Spacer,
  Divider,
  useBreakpointValue,
  Skeleton,
} from "@chakra-ui/react";
import { CreateButton, StorySummary, FeaturedBox } from "./s_components";
import authentication from "@vvv-interactive/nftanvil-react/cjs/auth.js";
import { createStoryActor } from "../../../../declarations/story";
import BonsaiBG from "../../../assets/Bonsai_Warriors_Background_1.png";
import PendragonBG from "../../../assets/pendragon.png";

const mostLikedAmount = 4; // temporary thing until we add pages for each section
const amountOfStories = 12;
const allStories = 10000;
const bonsaiAuthor =
  "7xvg3-yvl47-x2bkx-tg6yr-hdn6p-xtzti-qiwha-gwdqt-pix4u-7ie7i-3qe";
const pendragonAuthor =
  "ehjp3-bl645-t6go7-f2zyt-xxvyl-els4v-iocym-gsxli-mzj5v-tdwau-wae";

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxW={"7xl"} mt={{ base: -10, md: -2 }} mb={5}>
        <CreateButton />
        <FeaturedGrid />
        <MostlikedGrid />
        <RecentGrid />
      </Container>
    </>
  );
};

export default Stories;

const FeaturedGrid = () => {
  return (
    <>
      <Heading my={1} bgGradient="linear(to-t, #705025, #a7884a)" bgClip="text">
        Featured
      </Heading>
      <Divider my={2} borderColor="#16171b" />
      <>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} pb={5} gap={3} mx={2}>
          <FeaturedBox author={pendragonAuthor} img={PendragonBG} />
          <FeaturedBox author={bonsaiAuthor} img={BonsaiBG} />
        </SimpleGrid>
      </>
    </>
  );
};

const RecentGrid = () => {
  let isMounted = true;
  const [storyIds, setStoryIds] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(amountOfStories);

  let storyMo = createStoryActor({
    agentOptions: authentication.getAgentOptions(),
  });

  const loadStories = async () => {
    let ids = await storyMo.getStoryIds(currentAmount);
    if (isMounted) {
      setStoryIds(ids.ok);
      setLoaded(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    loadStories();
    return () => {
      isMounted = false;
    };
  }, [currentAmount]);

  return (
    <>
      <Heading my={1} bgGradient="linear(to-t, #705025, #a7884a)" bgClip="text">
        Recent
      </Heading>
      <Divider my={2} borderColor="#16171b" />
      {loaded ? (
        <>
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} pb={5} gap={3} mx={2}>
            {storyIds.map((item) => (
              <StorySummary key={item} storyId={item} />
            ))}
          </SimpleGrid>
          <ViewAllButton
            current={storyIds.length}
            setAmount={setCurrentAmount}
          />
        </>
      ) : (
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} pb={5} gap={3} mx={2}>
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
        </SimpleGrid>
      )}
    </>
  );
};

const ViewAllButton = ({ current, setAmount }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Stack direction={"row"}>
      <Spacer />
      <Button
        mt={8}
        colorScheme="#282828"
        bg="#282828"
        rounded={"full"}
        size={useBreakpointValue(["sm", "md"])}
        px={5}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
          opacity: "0.8",
        }}
        isDisabled={clicked}
        onClick={() => {
          setAmount(allStories);
          setClicked(true);
        }}
      >
        View All
      </Button>
    </Stack>
  );
};

const MostlikedGrid = () => {
  let isMounted = true;
  const [loaded, setLoaded] = useState(false);
  const [storyIds, setStoryIds] = useState([]);

  let storyMo = createStoryActor({
    agentOptions: authentication.getAgentOptions(),
  });

  const LoadMostliked = async () => {
    let storiesArray = [];
    let all = await storyMo.getAllStories();

    for (let i = 0; i < all.ok.length; i++) {
      if (all.ok[i].length > 0) {
        storiesArray.push(all.ok[i][0]);
      }
    }

    let sorted = storiesArray.sort(
      (a, b) => Number(b.totalVotes) - Number(a.totalVotes)
    );

    if (isMounted) {
      setStoryIds(sorted.slice(0, 4));

      setLoaded(true);
    }
  };

  useEffect(() => {
    LoadMostliked();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Heading my={1} bgGradient="linear(to-t, #705025, #a7884a)" bgClip="text">
        Most Liked
      </Heading>
      <Divider my={2} borderColor="#16171b" />
      {loaded ? (
        <>
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} pb={5} gap={3} mx={2}>
            {storyIds.map((item) => (
              <StorySummary key={item.storyId} storyId={item.storyId} />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} pb={5} gap={3} mx={2}>
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
          <Skeleton height={{ base: "150px", md: "200px" }} borderRadius="lg" />
        </SimpleGrid>
      )}
    </>
  );
};
