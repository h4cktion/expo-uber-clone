import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import tw from "tailwind-react-native-classnames";

const NavigatorCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Bonjour Matthieu</Text>
        </SafeAreaView>
    )
}

export default NavigatorCard

const styles = StyleSheet.create({})
