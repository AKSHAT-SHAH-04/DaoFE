import "./App.css";

import React from "react";

import Home from "./pages/Home";
import Createpage from "./pages/Createpage";
import Treasurypage from "./pages/Treasurypage";
import Aboutpage from "./pages/Aboutpage";
import Detailspage from "./pages/Detailspage";
import { Route, Routes } from "react-router-dom";
import Nftpage from "./pages/Nftpage";
import NoPageFound from "./pages/NoPageFound";
import NFTS from "./pages/NFTS";
import Delegatepage from "./pages/Delegatepage";


import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export default function App() {
 const { chains, provider } = configureChains(
  [chain.rinkeby, chain.polygonMumbai, chain.mainnet, chain.polygon, chain.ropsten],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
 );

 const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
 });

 const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
 });

 return (
  <WagmiConfig client={wagmiClient}>
   <RainbowKitProvider chains={chains}>
    <div>
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Create" element={<Createpage />} />
      <Route path="/Treasury" element={<Treasurypage />} />
      <Route path="/About" element={<Aboutpage />} />
      <Route path="/views/:id" element={<Detailspage />} />
      <Route path="/Nft" element={<Nftpage />} />
      <Route path="/NFTS" element={<NFTS />} />
      <Route path="/Delegate" element={<Delegatepage />} />
      <Route path="*" element={<NoPageFound />}></Route>
     </Routes>
    </div>
   </RainbowKitProvider>
  </WagmiConfig>
 );
}
