import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

// Component Imports
import MenuHamburger from '../../../components/MenuHamburger'
import { defaultProfileHeaderStyles } from '../MyProfileDrawer';

class ProfileLanding extends React.Component {
    /**
     * 
     */
    static navigationOptions = ({ navigation }) => {
        return {
            title: "My Profile",
            headerBackTitle: 'Back',
            headerLeft: (
                <MenuHamburger onPress={() => navigation.openDrawer()} color="white" />
            ),
            ...defaultProfileHeaderStyles
        }
    }

    /**
     * 
     */
    render() {
        return (
            <SafeAreaView>
                <Text>My Profile Landing</Text>
            </SafeAreaView>
        )
    }
}

export default ProfileLandingStack = createStackNavigator({
    ProfileLanding
})

ProfileLandingStack.navigationOptions = {
    title: "My Profile"
}