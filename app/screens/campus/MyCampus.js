import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

//
import { KSU_COLOR_PRIMARY } from '../../util/settings'

const defaultCampusHeaderStyles = {
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: KSU_COLOR_PRIMARY,
    }
}

class MyCampus extends React.Component {

    /**
     * 
     */
    static navigationOptions = ({ navigation }) => {
        return {
            title: "My Campus",
            headerBackTitle: 'Back',
            ...defaultCampusHeaderStyles
        }
    }

    /**
     * 
     */
    render() {
        return (
            <View>
                <Text>My Campus</Text>
            </View>
        )
    }
}

export default MyCampusStack = createStackNavigator({
    MyCampus
})