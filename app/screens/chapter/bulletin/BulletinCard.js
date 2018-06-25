import React from 'react'
import moment from 'moment';
import ReadMore from 'react-native-read-more-text';
import { View, Text, Image, StyleSheet } from 'react-native'

// 
import { ChapterPageView } from '../MyChapterDrawer';


export default class BulletinCard extends React.Component {
    render() {
        let { title, content, author, createdAt, image } = this.props
        // refine time to a legible format
        createdAt = moment(createdAt).calendar();
        return (
            <ChapterPageView style={style.container}>
                <View style={style.headerContainer}>
                    <View style={style.headerFlexLeft}>
                        <Text style={textStyles.headerStyle}>{title}</Text>
                    </View>
                    <View style={style.headerFlexRight}>
                        <Text style={textStyles.postDate}>{createdAt}</Text>
                    </View>
                </View>


                {
                    image ?

                        <View style={style.imageContainer}>
                            <Image
                                style={style.image}
                                source={{ uri: image }}
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
                        <Text style={style.content} numberOfLines={3}>{content}</Text>
                    </ReadMore>
                    <Text style={textStyles.postAuthorText}>Posted by {author}</Text>
                </View>

                <View style={style.footerContainer}>
                </View>
            </ChapterPageView>
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
        marginBottom: 10,
        borderRadius: 3,
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 3, width: 3 }
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerFlexLeft: {
        flex: -1
    },
    headerFlexRight: {
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
        fontSize: 18,
        margin: 7.5,
        fontWeight: "500"
    },
    content: {
        fontSize: 10
    },
    postDate: {
        textAlign: "right",
        fontWeight: "300",
    },
    postAuthorText: {
        textAlign: "right",
        fontWeight: "300",
        marginTop: 5,
        marginBottom: 4,
        marginRight: 4,
        fontStyle: "italic"
    }
})
