// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    // Initialize contract with 1 million tokens minted to the creator of the contract
    constructor() ERC20("Token", "TKN") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}

// Token deployed to: 0x843FDf03c9Bf59814b2b0E28C40bD93270b6b681

// The contract 0x843FDf03c9Bf59814b2b0E28C40bD93270b6b681 has already been verified.
// https://sepolia.etherscan.io/address/0x843FDf03c9Bf59814b2b0E28C40bD93270b6b681#code