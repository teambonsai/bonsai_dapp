import React from "react";
import logo from "../../../../assets/Bonsai-Team-ICON-Black.png";
import { OfferingPage } from "../lp_components";

const BonsaiNFT = () => {
  return (
    <>
      <OfferingPage
        title={"Team Bonsai presents"}
        collectionName={"Bonsai Warrior NFTs"}
        img={logo}
        name1={"Warrior"}
        name2={"Emperor"}
        name3={"Grandmaster"}
        price1={300000000}
        price2={2100000000}
        price3={1200000000}
        details1={"1 Bonsai Warrior NFT"}
        details2={"10 Bonsai Warrior NFTs"}
        details3={"5 Bonsai Warrior NFTs"}
        nfts1={1}
        nfts2={10}
        nfts3={5}
        tokenomics_link={
          "https://medium.com/@teambonsai.icp/bonsai-warrior-nft-tokenomics-bfbabfee7cde"
        }
        tokenomics_details={
          "Team Bonsai's genesis collection features 1100 hand crafted NFTs from the Bonsai Warriors story. Read our tokenomics paper for more details about the collection and the NFTs."
        }
        // launchingSoon
        saleEnded
        airdropEnded
      />
    </>
  );
};

export default BonsaiNFT;
