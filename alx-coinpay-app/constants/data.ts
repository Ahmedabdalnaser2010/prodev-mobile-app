interface CryptoData {
    id: string;
    name: string;
    symbol: string;
    price: string;
    change: string;
    icon: any;
}

export const cryptoData: CryptoData[] = [
    {
        id: '1',
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '42,890.12',
        change: '+2.34',
        icon: require('@/assets/images/bitcoin.png'),
    },
    {
        id: '2',
        name: 'Ethereum',
        symbol: 'ETH',
        price: '2,345.67',
        change: '-1.23',
        icon: require('@/assets/images/ethereum.png'),
    },
    // Add more cryptocurrencies
];