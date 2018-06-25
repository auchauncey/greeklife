import React, { Component } from 'react'
import { Text } from 'react-native'
import tinycolor from 'tinycolor2'

// Component Imports
import { userChapterColor } from '../../../../App'
import HeaderSideText from '../../../components/HeaderSideText';
import { getDefaultChapterStyles, ChapterPageView } from '../MyChapterDrawer'

export default class AddCalendarEvent extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add Calendar Event",
            headerLeft: (
                <HeaderSideText darkBg={tinycolor(userChapterColor).isDark()} left
                    text="Cancel" onPress={() => navigation.navigate('Calendar')} />

            ),
            headerRight: (
                <HeaderSideText darkBg={tinycolor(userChapterColor).isDark()} right
                    text="Submit" onPress={() => navigation.navigate('Calendar')} />
            ),
            ...getDefaultChapterStyles()

        }
    }


    render() {
        return (
            <ChapterPageView>
                <Text> add event </Text>
            </ChapterPageView>
        )
    }
}