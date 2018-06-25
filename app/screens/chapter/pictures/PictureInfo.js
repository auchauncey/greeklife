import React from 'react'
import { Text, Image } from 'react-native'
import PropTypes from 'prop-types'

// Component Imports
import { getDefaultChapterStyles, ChapterPageView } from '../MyChapterDrawer'

export default class PictureInfo extends React.Component {
    /**
     * 
     */
    static navigationOptions = ({ navigation }) => {
        const { imageTitle } = navigation.getParam("pictureInfo") || "Picture Title"

        return {
            title:imageTitle,
            ...getDefaultChapterStyles()
        }
    }

    /**
     * 
     */
    render() {
        const { imageURL } = this.props.navigation.getParam('pictureInfo')
        return (
            <ChapterPageView>
                <Text>Pictures</Text>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: imageURL }}
                />
            </ChapterPageView>
        )
    }
}

PictureInfo.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                pictureInfo: PropTypes.shape({
                    imageURL: PropTypes.string.isRequired,
                    imageTitle: PropTypes.string.isRequired
                })
            })
        })
    })
}