// const { INFURA_KEY, ALCHEMY_MAINNET_KEY, ALCHEMY_POLYGON_KEY } = process.env

export default {
  netId1: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 80,
      fast: 50,
      standard: 25,
      low: 8
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://etherscan.io/tx/',
      address: 'https://etherscan.io/address/',
      block: 'https://etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Ethereum Mainnet',
    deployedBlock: 15843563,
    registryContract: '0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2',
    multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    echoContractAccount: '0x9B27DD5Bb15d42DC224FCD0B7caEbBe16161Df42',
    rpcUrls: {
      Cloudflare: {
        name: 'Cloudflare',
        url: 'https://cloudflare-eth.com'
      },
      Ankr: {
        name: 'Ankr',
        url: 'https://rpc.ankr.com/eth'
      }
    },
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x3cF3E9D82c86b4A578dBDeA5a5AcF8eAD48d6DA5',
          '1': '0x4Cd8aec4Fb72E1119F0C0f5A83685160fdaC4D58',
          '10': '0xD67b813D4f90e192223657A602a485888e089708',
          '100': '0xEB8589883ef1B33B24aC6Da0a3985CE3eb4F8D6B'
        },
        symbol: 'ETH',
        decimals: 18
      },
      usdt: {
        instanceAddress: {
          '100': '0xE3FaF068306b45eB7E5C293e0054238882a70C2b',
          '1000': '',
          '10000': '',
          '100000': ''
        },
        tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        symbol: 'USDT',
        decimals: 6,
        gasLimit: '100000'
      }
    },
    ensSubdomainKey: 'mainnet-tornado',
    pollInterval: 15,
    constants: {
      NOTE_ACCOUNT_BLOCK: 11842486,
      ENCRYPTED_NOTES_BLOCK: 14248730,
      MINING_BLOCK_TIME: 15
    },
    'tornado-proxy-light.contract.tornadocash.eth': '0xbd89f03565025aAE6d6541c37A8B17EFf0E79887'
  },
  netId56: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 5,
      fast: 5,
      standard: 5,
      low: 5
    },
    nativeCurrency: 'bnb',
    currencyName: 'BNB',
    explorerUrl: {
      tx: 'https://bscscan.com/tx/',
      address: 'https://bscscan.com/address/',
      block: 'https://bscscan.com/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Binance Smart Chain',
    deployedBlock: 22554087,
    multicall: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      publicRpc1: {
        name: 'BSC Public RPC 1',
        url: 'https://bsc-dataseed.binance.org/'
      },
      publicRpc2: {
        name: 'BSC Public RPC 2',
        url: 'https://bsc-dataseed1.defibit.io/'
      },
      publicRpc3: {
        name: 'BSC Public RPC 3',
        url: 'https://bsc-dataseed1.ninicoin.io/'
      }
    },
    tokens: {
      bnb: {
        instanceAddress: {
          '0.1': '0x8641Ca7497dCe1f9D243f286Bb9Cb53948ee2652',
          '1': '0xF4c2F30E930EC97B7bA8b7E7644697865612aFE5',
          '10': '0xE1d875A5743206EB635a91F19E235037C466bdC5',
          '100': '0x3cF3E9D82c86b4A578dBDeA5a5AcF8eAD48d6DA5'
        },
        symbol: 'BNB',
        decimals: 18
      },
      usdt: {
        instanceAddress: {
          '100': '0x4Cd8aec4Fb72E1119F0C0f5A83685160fdaC4D58',
          '1000': '0xD67b813D4f90e192223657A602a485888e089708',
          '10000': '0xEB8589883ef1B33B24aC6Da0a3985CE3eb4F8D6B',
          '100000': '0xE3FaF068306b45eB7E5C293e0054238882a70C2b'
        },
        tokenAddress: '0x55d398326f99059fF775485246999027B3197955',
        symbol: 'USDT',
        decimals: 18,
        gasLimit: '100000'
      }
    },
    ensSubdomainKey: 'bsc-tornado',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 8159269,
      ENCRYPTED_NOTES_BLOCK: 8159269
    },
    'tornado-proxy-light.contract.tornadocash.eth': '0xbd89f03565025aAE6d6541c37A8B17EFf0E79887'
  },
  /*
  netId1: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 80,
      fast: 50,
      standard: 25,
      low: 8
    },
    nativeCurrency: 'eth',
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://etherscan.io/tx/',
      address: 'https://etherscan.io/address/',
      block: 'https://etherscan.io/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Ethereum Mainnet',
    deployedBlock: 9116966,
    rpcUrls: {
      Working: {
        name: 'Cloudflare',
        url: 'https://cloudflare-eth.com'
      },
      Working2: {
        name: 'Ankr',
        url: 'https://rpc.ankr.com/eth'
      },
      Infura: {
        name: 'Infura',
        url: `https://mainnet.infura.io/v3/${INFURA_KEY}`
      },
      Alchemy: {
        name: 'Alchemy',
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_KEY}`
      }
    },
    multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    registryContract: '0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2',
    echoContractAccount: '0x9B27DD5Bb15d42DC224FCD0B7caEbBe16161Df42',
    aggregatorContract: '0xE8F47A78A6D52D317D0D2FFFac56739fE14D1b49',
    tokens: {
      eth: {
        instanceAddress: {
          '0.1': '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc',
          '1': '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936',
          '10': '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF',
          '100': '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291'
        },
        symbol: 'ETH',
        decimals: 18
      },
      usdt: {
        instanceAddress: {
          '100': '0x169AD27A470D064DEDE56a2D3ff727986b15D52B',
          '1000': '0x0836222F2B2B24A3F36f98668Ed8F0B38D1a872f',
          '10000': '',
          '100000': ''
        },
        tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        symbol: 'USDT',
        decimals: 6,
        gasLimit: '100000'
      }
    },
    ensSubdomainKey: 'mainnet-tornado',
    pollInterval: 15,
    constants: {
      GOVERNANCE_BLOCK: 11474695,
      NOTE_ACCOUNT_BLOCK: 11842486,
      ENCRYPTED_NOTES_BLOCK: 14248730,
      MINING_BLOCK_TIME: 15
    },
    'torn.contract.tornadocash.eth': '0x77777FeDdddFfC19Ff86DB637967013e6C6A116C',
    'governance.contract.tornadocash.eth': '0x5efda50f22d34F262c29268506C5Fa42cB56A1Ce',
    'tornado-router.contract.tornadocash.eth': '0xd90e2f925DA726b50C4Ed8D0Fb90Ad053324F31b',
    'staking-rewards.contract.tornadocash.eth': '0x2FC93484614a34f26F7970CBB94615bA109BB4bf'
  },
  netId56: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 5,
      fast: 5,
      standard: 5,
      low: 5
    },
    nativeCurrency: 'bnb',
    currencyName: 'BNB',
    explorerUrl: {
      tx: 'https://bscscan.com/tx/',
      address: 'https://bscscan.com/address/',
      block: 'https://bscscan.com/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Binance Smart Chain',
    deployedBlock: 8158799,
    multicall: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      publicRpc1: {
        name: 'BSC Public RPC 1',
        url: 'https://bsc-dataseed.binance.org/'
      },
      publicRpc2: {
        name: 'BSC Public RPC 2',
        url: 'https://bsc-dataseed1.defibit.io/'
      },
      publicRpc3: {
        name: 'BSC Public RPC 3',
        url: 'https://bsc-dataseed1.ninicoin.io/'
      }
    },
    tokens: {
      bnb: {
        instanceAddress: {
          '0.1': '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
          '1': '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
          '10': '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD'
        },
        symbol: 'BNB',
        decimals: 18
      }
    },
    ensSubdomainKey: 'bsc-tornado',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 8159269,
      ENCRYPTED_NOTES_BLOCK: 8159269
    },
    'tornado-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  },
  netId137: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 100,
      fast: 75,
      standard: 50,
      low: 30
    },
    nativeCurrency: 'matic',
    currencyName: 'MATIC',
    explorerUrl: {
      tx: 'https://polygonscan.com/tx/',
      address: 'https://polygonscan.com/address/',
      block: 'https://polygonscan.com/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Polygon (Matic) Network',
    deployedBlock: 16257962,
    multicall: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    echoContractAccount: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
    rpcUrls: {
      Infura: {
        name: 'Infura',
        url: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`
      },
      Alchemy: {
        name: 'Alchemy',
        url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_POLYGON_KEY}`
      }
    },
    tokens: {
      matic: {
        instanceAddress: {
          '100': '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
          '1000': '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
          '10000': '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
          '100000': '0xa5C2254e4253490C54cef0a4347fddb8f75A4998'
        },
        symbol: 'MATIC',
        decimals: 18
      }
    },
    ensSubdomainKey: 'polygon-tornado',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 16257996,
      ENCRYPTED_NOTES_BLOCK: 16257996
    },
    'tornado-proxy-light.contract.tornadocash.eth': '0x0D5550d52428E7e3175bfc9550207e4ad3859b17'
  },
  */
  netId80001: {
    rpcCallRetryAttempt: 15,
    gasPrices: {
      instant: 100,
      fast: 75,
      standard: 50,
      low: 30
    },
    nativeCurrency: 'matic',
    currencyName: 'MATIC',
    explorerUrl: {
      tx: 'https://mumbai.polygonscan.com/tx/',
      address: 'https://mumbai.polygonscan.com/address/',
      block: 'https://mumbai.polygonscan.com/block/'
    },
    merkleTreeHeight: 20,
    emptyElement: '21663839004416932945382355908790599225266501822907911457504978515578255421292',
    networkName: 'Polygon (Mumbai) Network',
    deployedBlock: 28845103,
    multicall: '0x8bFdBD5557c336C7868b5F26188acfE18D3C12cE',
    echoContractAccount: '0x4AFFFD0F9cD435A01115b3258D88c3777cAcB104',
    rpcUrls: {
      Infura: {
        name: 'Infura',
        url: `https://rpc.ankr.com/polygon_mumbai`
      }
    },
    tokens: {
      matic: {
        instanceAddress: {
          '0.1': '0x62Db1B81C5b0fc4F33DeB7D10C6f32F596bdBeD1',
          '1': '0x34dA8aEE9766EF277ff8f30A5eb97e5E2007c3dB',
          '10': '',
          '1000': ''
        },
        symbol: 'MATIC',
        decimals: 18
      }
    },
    ensSubdomainKey: 'matic-tornado',
    pollInterval: 10,
    constants: {
      NOTE_ACCOUNT_BLOCK: 16257996,
      ENCRYPTED_NOTES_BLOCK: 16257996
    },
    'tornado-proxy-light.contract.tornadocash.eth': '0x66c6B5b9d808f0a9254ed08E699bdffb5D76B311'
  }
}
