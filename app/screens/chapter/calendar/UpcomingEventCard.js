import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { WHITE, PIKE_COLOR_PRIMARY, LITE_WHITE, DARK_GRAY } from '../../../util/settings'


export default class UpcomingEventCard extends Component {
    render() {
        return (
            <TouchableHighlight style={styles.cardContainer}
                onPress={() => {
                    this.props.navigation.navigate('CalendarEventModal', { date: "May 8", eventTitle: "Spring Formal", time: "6:00PM" })
                }}>
                <View style={styles.card}>
                    <View style={styles.cardDateContainer}>
                        <View style={styles.cardDateTextContainer}>
                            <View style={styles.cardDateTextContainerDate}>
                                <Text style={styles.cardDateTextContainerDateText}>
                                    8
                                </Text>
                            </View>
                            <View style={styles.cardDateTextContainerMonth}>
                                <Text style={styles.cardDateTextContainerMonthText}>
                                    MAY
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.cardInformationContainer}>
                        <View style={styles.cardInformationTextContainer}>
                            <View style={styles.cardInformationTopTextContainer}>
                                <Text style={styles.cardInformationEventTitle}>Spring Formal</Text>
                                <Text style={styles.cardInformationEventTime}>6:00 PM</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

// export default createStackNavigator({
//     UpcomingEventCardView:UpcomingEventCardView
// })


const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        height: 75,
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 15,
        width: "90%"
    },
    card: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 2 },
        backgroundColor: WHITE,
        borderRadius: 3,
        width: "90%",
        elevation: 3,
        flex: 1,
        flexDirection: "row",
    },
    // date portion
    cardDateContainer: {
        backgroundColor: PIKE_COLOR_PRIMARY,
        flex: 1
    },
    cardDateTextContainer: {
        flexDirection: "column",
        flex: 1
    },
    cardDateTextContainerDate: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    cardDateTextContainerDateText: {
        fontSize: 36,
        color: WHITE
    },
    cardDateTextContainerMonth: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    cardDateTextContainerMonthText: {
        fontSize: 18,
        color: WHITE
    },
    // information portion
    cardInformationContainer: {
        backgroundColor: LITE_WHITE,
        justifyContent: "center",
        flex: 3
    },
    cardInformationTextContainer: {
        flexDirection: "column",
        flex: 0.65,
        alignItems: "center",
    },
    cardInformationTopTextContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardInformationEventTitle: {
        fontSize: 22,
        color: DARK_GRAY
    },
    cardInformationEventTime: {
        fontSize: 15,
        color: "grey"
    },
    cardInformationBottomText: {
        alignSelf: "flex-end",
        backgroundColor: "orange"
    }
})