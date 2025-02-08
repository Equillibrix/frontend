export const CONTRACT_ADDRESS_LONG_POSITION = '0x1a9c0ba3B16Cd68cDe1ad0956C953F1ACcc26eD4'; // FROM 07.02.24 USDC
export const CONTRACT_ABI_LONG_POSITION = [
    {
        type: 'constructor',
        inputs: [
            {
                name: '_fluidVaultT1',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_fluidVaultT2',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_fluidVaultT3',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_fluidVaultT4',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_fluidDexResolver',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_fluidVaultResolver',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_fluidDexT1',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_uniswapV3Router',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '_uniswapQuoter',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'supplyTokenOracle_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'borrowTokenOracle_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'wrappedETH_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'fluidFlashAggregatorProxy_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'fluidVaultFactory_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'fluidWalletFactoryProxy_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'fluidConnector_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'instaFlashPayback_',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'instaMemory_',
                type: 'address',
                internalType: 'address',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'receive',
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'ETH_TO_USDC_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'LEVERAGE_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'LIQUIDATION_LTV',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'MAX_LTV',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'MEMORY_ID',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'PERCENT_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'PRICE_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'SLIPPAGE_DECIMALS',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'UNISWAP_POOL_FEE',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint24',
                internalType: 'uint24',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'borrowToken',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'deleverage',
        inputs: [
            {
                name: 'nftId',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'borrowAmount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'slippage',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'tuple',
                internalType: 'struct Structs.UserPosition',
                components: [
                    {
                        name: 'nftId',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'owner',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'isLiquidated',
                        type: 'bool',
                        internalType: 'bool',
                    },
                    {
                        name: 'isSupplyPosition',
                        type: 'bool',
                        internalType: 'bool',
                    },
                    {
                        name: 'tick',
                        type: 'int256',
                        internalType: 'int256',
                    },
                    {
                        name: 'tickId',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeSupply',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeDustBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'supply',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'borrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'dustBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                ],
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'deposit',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'depositAndBorrow',
        inputs: [
            {
                name: 'nftId',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'newCol',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: 'newDebt',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: 'to',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: '',
                type: 'int256',
                internalType: 'int256',
            },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'getCurrentPrice',
        inputs: [
            {
                name: 'oracle',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getLongBorrowAmount',
        inputs: [
            {
                name: 'nftId',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: 'userBorrow',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getLongBorrowPrice',
        inputs: [],
        outputs: [
            {
                name: 'borrowPrice',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getLongSupplyAmount',
        inputs: [
            {
                name: 'nftId',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: 'userSupply',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getLongSupplyPrice',
        inputs: [],
        outputs: [
            {
                name: 'supplyPrice',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getLongTotalUsd',
        inputs: [
            {
                name: 'nftId',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: 'totalUsd',
                type: 'int256',
                internalType: 'int256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getPositionInfo',
        inputs: [
            {
                name: 'nftId',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: 'userPosition',
                type: 'tuple',
                internalType: 'struct Structs.UserPosition',
                components: [
                    {
                        name: 'nftId',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'owner',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'isLiquidated',
                        type: 'bool',
                        internalType: 'bool',
                    },
                    {
                        name: 'isSupplyPosition',
                        type: 'bool',
                        internalType: 'bool',
                    },
                    {
                        name: 'tick',
                        type: 'int256',
                        internalType: 'int256',
                    },
                    {
                        name: 'tickId',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeSupply',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeDustBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'supply',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'borrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'dustBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getPriceWithReliability',
        inputs: [
            {
                name: 'oracle',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                name: 'price',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'isReliable',
                type: 'bool',
                internalType: 'bool',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getUserPositions',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256[]',
                internalType: 'uint256[]',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'onERC721Received',
        inputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: '',
                type: 'bytes',
                internalType: 'bytes',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'bytes4',
                internalType: 'bytes4',
            },
        ],
        stateMutability: 'pure',
    },
    {
        type: 'function',
        name: 'openLeverage',
        inputs: [
            {
                name: 'nftId_',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'supplyAmount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'borrowAmount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'slippage',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'tuple',
                internalType: 'struct Structs.UserPosition',
                components: [
                    {
                        name: 'nftId',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'owner',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'isLiquidated',
                        type: 'bool',
                        internalType: 'bool',
                    },
                    {
                        name: 'isSupplyPosition',
                        type: 'bool',
                        internalType: 'bool',
                    },
                    {
                        name: 'tick',
                        type: 'int256',
                        internalType: 'int256',
                    },
                    {
                        name: 'tickId',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeSupply',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'beforeDustBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'supply',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'borrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'dustBorrow',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                ],
            },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'openLongPositionT3',
        inputs: [
            {
                name: 'newCol_',
                type: 'int256',
                internalType: 'int256',
            },
        ],
        outputs: [
            {
                name: 'nftId_',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'finalCol_',
                type: 'int256',
                internalType: 'int256',
            },
            {
                name: 'finalDebt_',
                type: 'int256',
                internalType: 'int256',
            },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'owner',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'positions',
        inputs: [
            {
                name: '',
                type: 'address',
                internalType: 'address',
            },
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'renounceOwnership',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'swap',
        inputs: [
            {
                name: 'tokenIn',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'tokenOut',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'borrowAmount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'slippage',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'recipient',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                name: 'amountOut',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'swap',
        inputs: [
            {
                name: 'tokenIn',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'tokenOut',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'borrowAmount',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'slippage',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: 'amountOut',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'swapFlashLoan',
        inputs: [
            {
                name: 'tokenIn',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'tokenOut',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'wrappedEth',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'amountIn',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'slippage',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'instaMemory',
                type: 'address',
                internalType: 'address',
            },
            {
                name: 'memoryId',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        outputs: [
            {
                name: '',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'transferOwnership',
        inputs: [
            {
                name: 'newOwner',
                type: 'address',
                internalType: 'address',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'event',
        name: 'OwnershipTransferred',
        inputs: [
            {
                name: 'previousOwner',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'newOwner',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
        ],
        anonymous: false,
    },
];
