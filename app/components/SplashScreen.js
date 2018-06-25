import React, { Component } from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import { GREEK_LIFE_COLOR_PRIMARY } from '../util/settings'
export default class SplashScreen extends Component {
    render() {
        return (
            <View style={{ height: "100%" }}>
                <StatusBar hidden />
                <Image source={require('../assets/splash.png')} style={{ width: "100%", height: "100%" }} />
                {/* <Text>Loading...</Text> */}
            </View>
        )
    }
}

