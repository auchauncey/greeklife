import React from 'react'
import { View } from 'react-native'
import tinycolor from 'tinycolor2'
import { createDrawerNavigator } from 'react-navigation'

// Component Imports
import BulletinStack from './bulletin/Bulletin'
import PictureStack from './pictures/Pictures'
import CalendarStack from './calendar/Calendar'
import { userChapterColor } from '../../../App'
import { StatusBar } from 'react-native';
/**
 * Used for header configuration in the components of this directory
 */

export const getDefaultChapterStyles = () => {
    return {
        headerTintColor: tinycolor(userChapterColor).isDark() ? "white" : "black",
        headerStyle: {
            backgroundColor: userChapterColor,
        }
    }
}


export const ChapterPageView = (props) => {
    return (
        <View props={props} style={props.style}>
            <StatusBar
                barStyle={tinycolor(userChapterColor).isDark() ? "light-content" : "dark-content"}
            />
            {props.children}
        </View>
    )
}


export default MyChapterDrawer = createDrawerNavigator({
    PictureStack,
    BulletinStack,
    CalendarStack
})

MyChapterDrawer.navigationOptions = {
    title: "My Chapter"
}

