import { ethers } from "ethers";
import treasuryABI from "./treasury.json";
import governanceABI from "./Governance.json";
import governTokenABI from "./NFT.json";

export const treasuryAbi = treasuryABI.abi;
export const governanceAbi = governanceABI.abi;
export const nftAbi = governTokenABI.abi;

export const treasuryAddress = "0xaad986533EBF544f7527B41ab3647cFFdBDf2446";

export const governanceAddress = "0x9C23B01A852c8bC5C5C17947Be16a77FC86da210";

export const nftContAddress = "0x33E549cFc5ef1c499256f4656Cd0F1906F1d58f8";

export const provider = new ethers.providers.Web3Provider(window.ethereum);


export const url = "https://hidden-dawn-97602.herokuapp.com/api/";

export const signer = provider.getSigner();

export const treasuryContract = new ethers.Contract(treasuryAddress, treasuryABI.abi, signer);

export const governanceContract = new ethers.Contract(governanceAddress, governanceABI.abi, signer);

export const nftContract = new ethers.Contract(nftContAddress, nftAbi, signer);
