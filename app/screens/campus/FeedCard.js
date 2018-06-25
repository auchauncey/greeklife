import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

// 
import { WHITE, SCREEN_HEIGHT, DARK_GRAY } from '../../util/settings';

export default class FeedCard extends Component {
    render() {
        console.log(this.props.img)
        return (
            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <Text style={styles.chapterTitleText}>Pi Kappa Alpha</Text>
                        <Text style={styles.eventTitleText}>Fireman's Challenge</Text>
                    </View>
                    <View style={styles.headerRightContainer}>
                        <Text>test0.1</Text>
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Text>ysl</Text>
                </View>

                <View style={styles.bodyContainer}>
                    <Text>ysl</Text>
                </View>

                <View style={styles.footerContainer}>
                    <Text style={styles.purchaseAdmissionText}>Purchase Admission</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 
    container: {
        width: "90%",
        borderRadius: 5,
        height: SCREEN_HEIGHT / 2,
        alignSelf: "center",
        marginTop: 15,
        backgroundColor: WHITE,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 3, width: 3 }
    },

    /**
     * All things in the header of the card
     */
    headerContainer: {
        height: "20%",
        display: "flex",
        flexDirection: "row"
    },

    headerLeftContainer: {
        flex: 1.5,
        display: "flex",
        flexDirection: "column",
        marginLeft: 12.5,
        marginTop: 10
    },

    chapterTitleText: {
        flex: 1,
        fontSize: 18
    },

    eventTitleText: {
        flex: 1,
        color: DARK_GRAY
    },

    headerRightContainer: {
        flex: 1
    },

    /**
     * 
     */
    imageContainer: {
        height: "35%",
        backgroundColor: "green"

    },

    /**
     * 
     */
    bodyContainer: {
        height: "35%",
        backgroundColor: "blue"

    },

    /**
     * 
     */
    footerContainer: {
        height: "10%",
        backgroundColor: "yellow",
        justifyContent: "center"
    },

    purchaseAdmissionText: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "600",
        color: DARK_GRAY
    },

})