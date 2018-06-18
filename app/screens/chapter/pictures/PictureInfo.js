import React from 'react'
import { SafeAreaView, Text, Image } from 'react-native'

// Component Imports
import { defaultChapterHeaderStyles } from '../MyChapterDrawer'

export default class PictureInfo extends React.Component {
    /**
     * 
     */
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.getParam("pictureInfo") || "Picture Info"
        
        return {
            title,
            ...defaultChapterHeaderStyles
        }
    }

    /**
     * 
     */
    render() {
        const { pictureURL } = this.props.navigation.getParam('pictureInfo')
        return (
            <SafeAreaView>
                <Text>Pictures</Text>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: pictureURL }}
                />
            </SafeAreaView>
        )
    }
}