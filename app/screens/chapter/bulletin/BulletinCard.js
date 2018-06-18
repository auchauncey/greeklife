import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ReadMore from 'react-native-read-more-text';

export default class BulletinCard extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.headerContainer}>
                    <View style={style.headerFlexLeft}>
                        <Text style={textStyles.headerStyle}>Header Title</Text>
                    </View>
                    <View style={style.headerFlexRight}>
                        <Text style={textStyles.postDate}>Today at 9:45PM</Text>
                    </View>
                </View>


                {
                    this.props.image ?

                        <View style={style.imageContainer}>
                            <Image
                                style={style.image}
                                source={{ uri: "https://pbs.twimg.com/profile_images/694408733493841920/oEwwbqgO_400x400.jpg" }}
                            />

                        </View>
                        :
                        <View style={style.divider} />

                }

                <View style={style.contentContainer}>
                    <ReadMore numberOfLines={3}
                        renderTruncatedFooter={this._renderTruncatedFooter}
                        renderRevealedFooter={this._renderRevealedFooter}
                        onReady={this._handleTextReady}>
                        <Text style={style.content} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a scelerisque nibh. Suspendisse blandit sem luctus, viverra mi tincidunt, scelerisque lorem. Suspendisse rutrum dictum dui eu pulvinar.</Text>
                    </ReadMore>
                    <Text style={textStyles.postAuthorText}>Posted by Austin Chauncey</Text>
                </View>

                <View style={style.footerContainer}>
                </View>
            </View>
        )
    }
    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: "blue", marginTop: 5 }} onPress={handlePress}>
                Read more
          </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: "blue", marginTop: 5 }} onPress={handlePress}>
                Show less
          </Text>
        );
    }

}


const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "92.5%",
        alignSelf: "center",
        marginTop: 15,
        borderRadius: 3,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 3, width: 3 }
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row"
    },
    headerFlexLeft: {
        flex: 2
    },
    headerFlexRight: {
        flex: 1,
        alignSelf: "flex-end",
        marginBottom: 7.5,
        marginRight: 7.5
    },


    imageContainer: {
        backgroundColor: "blue",
    },
    image: {
        height: 200,
        width: "100%"
    },

    contentContainer: {
        width: "95%",
        marginTop: 2,
        alignSelf: "center"
    },
    footerContainer: {
        backgroundColor: "yellow"
    },


    divider: {
        height: 1,
        backgroundColor: "#DCDCDC",
        alignSelf: "center",
        marginBottom: 5,
        width: "100%"
    }
})

const textStyles = StyleSheet.create({
    headerStyle: {
        fontSize: 20,
        margin: 7.5,
        fontWeight: "500"
    },
    content: {
        fontSize: 10
    },
    postDate: {
        textAlign: "right",
        fontWeight: "300"
    },
    postAuthorText: {
        textAlign: "right",
        fontWeight: "300",
        marginBottom:4,
        marginRight:4
    }
})
