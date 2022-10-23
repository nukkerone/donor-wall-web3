// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract CoursePortal {
    uint256 totalSignedUp;

    constructor() {
        console.log("Setting up the Course Portal contract!");
        totalSignedUp = 0;
    }

    function signUp() public {
        totalSignedUp += 1;
        console.log("%s has signed up!", msg.sender);
    }

    function getTotalSignedUp() public view returns (uint256) {
        console.log("We have %d people signed up to the course!", totalSignedUp);
        return totalSignedUp;
    }
}
