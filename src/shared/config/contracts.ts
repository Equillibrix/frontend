export const CONTRACT_ADDRESS_LONG_POSITION = '0xD123718929E3eF50408d860A888e2486248aDcA7'; // FROM 10.02.24 USDC without oracle price
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

export const USDC_CONTRACT_ADDRESS_MAINNET = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
export const USDC_ERC20_ABI = [
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'authorizer', type: 'address' },
            { indexed: true, internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
        ],
        name: 'AuthorizationCanceled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'authorizer', type: 'address' },
            { indexed: true, internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
        ],
        name: 'AuthorizationUsed',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: '_account', type: 'address' }],
        name: 'Blacklisted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'newBlacklister', type: 'address' },
        ],
        name: 'BlacklisterChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'burner', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'Burn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'newMasterMinter', type: 'address' },
        ],
        name: 'MasterMinterChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'minter', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'Mint',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'minter', type: 'address' },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'minterAllowedAmount',
                type: 'uint256',
            },
        ],
        name: 'MinterConfigured',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: 'oldMinter', type: 'address' }],
        name: 'MinterRemoved',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: 'address', name: 'previousOwner', type: 'address' },
            { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: 'newAddress', type: 'address' }],
        name: 'PauserChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: 'newRescuer', type: 'address' }],
        name: 'RescuerChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [{ indexed: true, internalType: 'address', name: '_account', type: 'address' }],
        name: 'UnBlacklisted',
        type: 'event',
    },
    { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
    {
        inputs: [],
        name: 'CANCEL_AUTHORIZATION_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'DOMAIN_SEPARATOR',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'PERMIT_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'authorizer', type: 'address' },
            { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
        ],
        name: 'authorizationState',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
        name: 'blacklist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'blacklister',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'authorizer', type: 'address' },
            { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            { internalType: 'uint8', name: 'v', type: 'uint8' },
            { internalType: 'bytes32', name: 'r', type: 'bytes32' },
            { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'cancelAuthorization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'authorizer', type: 'address' },
            { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        name: 'cancelAuthorization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'minter', type: 'address' },
            { internalType: 'uint256', name: 'minterAllowedAmount', type: 'uint256' },
        ],
        name: 'configureMinter',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'currency',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'decrement', type: 'uint256' },
        ],
        name: 'decreaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'increment', type: 'uint256' },
        ],
        name: 'increaseAllowance',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'string', name: 'tokenName', type: 'string' },
            { internalType: 'string', name: 'tokenSymbol', type: 'string' },
            { internalType: 'string', name: 'tokenCurrency', type: 'string' },
            { internalType: 'uint8', name: 'tokenDecimals', type: 'uint8' },
            { internalType: 'address', name: 'newMasterMinter', type: 'address' },
            { internalType: 'address', name: 'newPauser', type: 'address' },
            { internalType: 'address', name: 'newBlacklister', type: 'address' },
            { internalType: 'address', name: 'newOwner', type: 'address' },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'string', name: 'newName', type: 'string' }],
        name: 'initializeV2',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'lostAndFound', type: 'address' }],
        name: 'initializeV2_1',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address[]', name: 'accountsToBlacklist', type: 'address[]' },
            { internalType: 'string', name: 'newSymbol', type: 'string' },
        ],
        name: 'initializeV2_2',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
        name: 'isBlacklisted',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'isMinter',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'masterMinter',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_to', type: 'address' },
            { internalType: 'uint256', name: '_amount', type: 'uint256' },
        ],
        name: 'mint',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'minter', type: 'address' }],
        name: 'minterAllowance',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'nonces',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [],
        name: 'paused',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pauser',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
            { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        name: 'permit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
            { internalType: 'uint8', name: 'v', type: 'uint8' },
            { internalType: 'bytes32', name: 'r', type: 'bytes32' },
            { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'permit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
            { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
            { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        name: 'receiveWithAuthorization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
            { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
            { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            { internalType: 'uint8', name: 'v', type: 'uint8' },
            { internalType: 'bytes32', name: 'r', type: 'bytes32' },
            { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'receiveWithAuthorization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'minter', type: 'address' }],
        name: 'removeMinter',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'contract IERC20', name: 'tokenContract', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'amount', type: 'uint256' },
        ],
        name: 'rescueERC20',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'rescuer',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
            { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
            { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            { internalType: 'bytes', name: 'signature', type: 'bytes' },
        ],
        name: 'transferWithAuthorization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'validAfter', type: 'uint256' },
            { internalType: 'uint256', name: 'validBefore', type: 'uint256' },
            { internalType: 'bytes32', name: 'nonce', type: 'bytes32' },
            { internalType: 'uint8', name: 'v', type: 'uint8' },
            { internalType: 'bytes32', name: 'r', type: 'bytes32' },
            { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        name: 'transferWithAuthorization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
        name: 'unBlacklist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    {
        inputs: [{ internalType: 'address', name: '_newBlacklister', type: 'address' }],
        name: 'updateBlacklister',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '_newMasterMinter', type: 'address' }],
        name: 'updateMasterMinter',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: '_newPauser', type: 'address' }],
        name: 'updatePauser',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'newRescuer', type: 'address' }],
        name: 'updateRescuer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'version',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'pure',
        type: 'function',
    },
];

export const USDC_ARB_SEPOLIA = '0x75faf114eafb1bdbe2f0316df893fd58ce46aa4d';
