import CryptoCard from '@/components/CryptoCard';
import { cryptoData } from '@/constants/data';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className="flex-1 bg-gray-100 p-4">
            <View className="mb-6">
                <Text className="text-gray-500 text-sm">Welcome back</Text>
                <Text className="text-2xl font-bold">John Doe</Text>
            </View>

            <View className="bg-blue-600 rounded-xl p-4 mb-6">
                <Text className="text-white text-lg">Total Balance</Text>
                <Text className="text-white text-3xl font-bold my-2">$12,345.67</Text>
                <View className="flex-row justify-between">
                    <TouchableOpacity className="bg-white rounded-full px-4 py-2">
                        <Text className="text-blue-600 font-medium">Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="border border-white rounded-full px-4 py-2">
                        <Text className="text-white font-medium">Withdraw</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className="text-xl font-bold mb-4">Cryptocurrencies</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                {cryptoData.map((crypto) => (
                    <CryptoCard
                        key={crypto.id}
                        name={crypto.name}
                        symbol={crypto.symbol}
                        price={crypto.price}
                        change={crypto.change}
                        icon={crypto.icon}
                    />
                ))}
            </ScrollView>

            <Text className="text-xl font-bold mb-4">Recent Transactions</Text>
            <ScrollView>
                {/* Transaction items would go here */}
            </ScrollView>
        </View>
    );
}