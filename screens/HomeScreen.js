import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../slices/navSlice';
// Latitude : 50.4333
// Longitude : 3.5833
const HomeScreen = () => {
    const dispatch = useDispatch();        
    const setCoordonate = () => {
        dispatch(setOrigin({
            location: {
                lng: 3.5833,
                lat: 50.4333
            },
            description: 'Home',
        }));
        dispatch(setDestination(null));
    };

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                style={styles.image}
                source={{
                    uri: "https://links.papareact.com/gzs",
                }}
                />
                <Button
                    onPress={setCoordonate}
                    title="Fresnes sur escaut"
                    color="#841584"
                    accessibilityLabel="Fresnes sur escaut"
                />
            <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    image: {
        width:100,
        height: 100,
        resizeMode: 'contain',
    }
});
