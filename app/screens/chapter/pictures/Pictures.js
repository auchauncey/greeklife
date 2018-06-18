import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { SafeAreaView, Text, Button, Image } from 'react-native'


// Component Imports
import PictureInfo from './PictureInfo';
import MenuHamburger from '../../../components/MenuHamburger'
import { defaultChapterHeaderStyles } from '../MyChapterDrawer'

class Pictures extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Chapter Photos",
            headerBackTitle: 'Back',
            headerLeft: (
                <MenuHamburger onPress={() => navigation.toggleDrawer()} />
            ),
            ...defaultChapterHeaderStyles
        }
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Pictures</Text>

                <Button
                    title="picture info"
                    onPress={() => this.props.navigation.navigate(
                        'PictureInfo', {
                            "pictureInfo": {
                                title: "Cute Pic Bro", imageUrl: "http://google.com",
                                pictureURL: "https://pbs.twimg.com/profile_images/694408733493841920/oEwwbqgO_400x400.jpg"
                            }
                        }
                    )}
                />

            </SafeAreaView>
        )
    }
}



export default PictureStack = createStackNavigator({
    Pictures,
    PictureInfo
})

PictureStack.navigationOptions = {
    title: "Photo Album"
}