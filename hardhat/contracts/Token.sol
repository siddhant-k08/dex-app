// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    // Initialize contract with 1 million tokens minted to the creator of the contract
    constructor() ERC20("Token", "TKN") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}

// Token deployed to: 0xc75Eb08B9fa2Ec6E2850B2116858587088f2724a

//Successfully verified contract Token on the block explorer.
//https://sepolia.etherscan.io/address/0xc75Eb08B9fa2Ec6E2850B2116858587088f2724a#writeContract