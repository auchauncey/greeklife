import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

//
import { WHITE, SCREEN_WIDTH, GAINSBORO_GRAY} from '../../util/settings'

export default class HouseCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageContainer}
                            source={this.props.imageURL} />
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.chapterNameTextContainer}>
                        <Text style={styles.chapterName}>{this.props.name}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE,
        height: "90%",
        alignSelf: "center",
        marginHorizontal: SCREEN_WIDTH * 0.02,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        width: SCREEN_WIDTH / 4,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: 'black',
        borderColor: "#D3D3D3",
        borderWidth: 1.5,
        shadowOffset: { height: 3, width: 3 }
    },

    topContainer: {
        flex: 5,
        justifyContent: "center"
    },
    imageContainer: {
        height: 70,
        width: 70,
        borderRadius: 35,
        alignSelf: "center"
    },

    bottomContainer: {
        flex: 3,
        justifyContent: "center"
    },
    chapterNameTextContainer: {
        width: "90%",
        alignSelf: "center"
    },
    chapterName: {
        textAlign: "center"
    }
})