import tinycolor from 'tinycolor2'
import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation'
import { Calendar as WixCalendar } from 'react-native-calendars'

// Component Imports
import { userChapterColor } from '../../../../App'
import AddCalendarEvent from './AddCalendarEvent';
import MenuHamburger from '../../../components/MenuHamburger'
import { getDefaultChapterStyles, ChapterPageView } from '../MyChapterDrawer';
import UpcomingEventCard from './UpcomingEventCard';
import { GAINSBORO_GRAY } from '../../../util/settings';

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.onDayPress = this.onDayPress.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        let accentColor = tinycolor(userChapterColor).isDark() ? "white" : "black"
        return {
            title: "Calendar",
            headerLeft: (
                <MenuHamburger onPress={() => navigation.openDrawer()} color="white" />
            ),
            headerRight: (
                <Icon name="ios-add"
                    size={26} style={{ marginRight: 10, color: accentColor, fontWeight: "600" }}
                    onPress={() => navigation.navigate('AddCalendarEvent', { test: 1 })}
                />
            ),
            ...getDefaultChapterStyles()
        }
    }

    render() {
        return (
            <ChapterPageView>
                <View
                    style={{ height: "63%", width: "100%", backgroundColor: "white" }}
                >
                    <WixCalendar
                        onDayPress={this.onDayPress}
                        markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
                    />
                </View>
                <View
                    style={{ height: "37%", width: "100%", backgroundColor: GAINSBORO_GRAY }}

                >
                    <ScrollView contentContainerStyle={{
                        alignItems: "center"
                    }}>
                        <UpcomingEventCard navigation={this.props.navigation} />
                        <UpcomingEventCard navigation={this.props.navigation} />
                        <UpcomingEventCard navigation={this.props.navigation} />
                    </ScrollView>
                </View>
            </ChapterPageView>
        )
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }
}

export default CalendarStack = createStackNavigator({
    Calendar,
    AddCalendarEvent
})

CalendarStack.navigationOptions = {
    title: "Calendar"
}