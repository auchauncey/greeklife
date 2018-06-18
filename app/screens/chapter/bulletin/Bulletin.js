import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'


// Component Imports
import { defaultChapterHeaderStyles } from '../MyChapterDrawer'

import MenuHamburger from '../../../components/MenuHamburger'
import BulletinCard from './BulletinCard';
import BulletinCardExpanded from './BulletinCardExpanded';


class Bulletin extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Chapter Bulletin",
            headerBackTitle: 'Back',
            headerLeft: (
                <MenuHamburger onPress={() => navigation.openDrawer()} />
            ),
            ...defaultChapterHeaderStyles
        }
    }
    render() {
        return (
            <ScrollView>
                <BulletinCard image />
                <BulletinCard />
                <BulletinCard image />
                <BulletinCard />
                <BulletinCard />
            </ScrollView>
        )
    }
}

export default BulletinStack = createStackNavigator({
    Bulletin,
    BulletinCardExpanded
})

BulletinStack.navigationOptions = {
    title: "Bulletin"
}
