import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

//
import { KSU_COLOR_PRIMARY } from '../../util/settings'
import ChapterHouses from './ChapterHouses';
import UpcomingEventsFeed from './UpcomingEventsFeed';

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
            <View style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <ChapterHouses />
                <UpcomingEventsFeed />
            </View>
        )
    }
}

export default MyCampusStack = createStackNavigator({
    MyCampus
})