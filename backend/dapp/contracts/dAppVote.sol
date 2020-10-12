// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract dAppVote {
    address private owner;

    struct Voting {
        uint256 quorum;
        uint256 favorable;
        uint256 against;
        string proposals;
        uint256 timestamp;
    }

    Voting[] votings;

    modifier isOwner() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    constructor() public {
        owner = msg.sender;
        emit OwnerSet(address(0), owner);
    }

    event OwnerSet(address indexed oldOwner, address indexed newOwner);

    function storeVote(
        uint256 _quorum,
        uint256 _favorable,
        uint256 _against,
        string memory _proposals
    ) public isOwner {
        //require (bytes(_quorum).length > 0 && bytes(_favorable).length > 0 && bytes(_against).length > 0 && bytes(_proposals).length > 0);
        uint256 _timestamp = block.timestamp;
        votings.push(
            Voting(_quorum, _favorable, _against, _proposals, _timestamp)
        );
    }

    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    function getLength() public view isOwner returns (uint256) {
        return votings.length;
    }

    function getVotings(uint256 number)
        public
        view
        isOwner
        returns (
            string memory _proposals,
            uint256 _quorum,
            uint256 _favorable,
            uint256 _against,
            uint256 _timestamp
        )
    {
        _quorum = votings[number].quorum;
        _favorable = votings[number].favorable;
        _against = votings[number].against;
        _proposals = votings[number].proposals;
        _timestamp = votings[number].timestamp;
        return (_proposals, _quorum, _favorable, _against, _timestamp);
    }

    // function kill() public isOwner {
    //     selfdestruct(this);
    // }
}
