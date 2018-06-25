import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Button, Image, FlatList } from 'react-native'
import tinycolor from 'tinycolor2'

// Component Imports
import PictureInfo from './PictureInfo'
import { userChapterColor } from '../../../../App'
import MenuHamburger from '../../../components/MenuHamburger'
import HeaderAddItem from '../../../components/HeaderAddItem'
import { getDefaultChapterStyles, ChapterPageView } from '../MyChapterDrawer'
import { SCREEN_WIDTH } from '../../../util/settings';

const photos = [
    {
        imageTitle: "Da boy N. Cage",
        imageURL: require('../../../assets/cage.jpeg')
    },
    {
        imageTitle: "Mr Dicaprio",
        imageURL: require('../../../assets/dicaprio.jpg')
    },
    {
        imageTitle: "Drizzyyyy",
        imageURL: require('../../../assets/drake.png')
    },
    {
        imageTitle: "foxmfldasmf",
        imageURL: require('../../../assets/fox.jpg')
    },
    {
        imageTitle: "J LAW",
        imageURL: require('../../../assets/lawrence.jpg')
    },
    {
        imageTitle: "addammmma",
        imageURL: require('../../../assets/sandler.jpg')
    },
    {
        imageTitle: "addadfdsaalkmmmma",
        imageURL: require('../../../assets/someone.jpg')
    },
    {
        imageTitle: "addfkfadslkadsammmma",
        imageURL: require('../../../assets/splash.png')
    },
    {
        imageTitle: "addaflaflkdsammmma",
        imageURL: require('../../../assets/west.jpg')
    },
    {
        imageTitle: "addamflfsalkasdmmma",
        imageURL: require('../../../assets/sandler.jpg')
    },
    {
        imageTitle: "addamk2f9f43mmma",
        imageURL: require('../../../assets/sandler.jpg')
    },
]

const IMAGE_WIDTH = (SCREEN_WIDTH / 2) - (SCREEN_WIDTH * 0.10)

// ../../../assets
class Pictures extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Chapter Photos",
            headerBackTitle: 'Back',
            headerLeft: (
                <MenuHamburger onPress={() => navigation.toggleDrawer()} color="white" />
            ),
            headerRight: (
                <HeaderAddItem darkBg={tinycolor(userChapterColor).isDark()}
                    onPress={() => navigation.navigate('AddPost', { test: 1 })}
                />
            ),
            ...getDefaultChapterStyles()
        }
    }

    render() {
        return (
            <ChapterPageView>
                <FlatList
                    data={photos}
                    columnWrapperStyle={{ justifyContent: "space-around" }}
                    numColumns={2}
                    keyExtractor={item => item.imageTitle + Math.random(350)}
                    renderItem={({ item }) => {
                        const { imageURL } = item
                        return <Image style={{ width: IMAGE_WIDTH, height: 100, marginTop: 15 }} source={imageURL} />
                    }}
                />
                <Button
                    title="picture info"
                    onPress={() => this.props.navigation.navigate(
                        'PictureInfo', {
                            "pictureInfo": {
                                imageTitle: "Melllll",
                                imageURL: "https://pbs.twimg.com/profile_images/694408733493841920/oEwwbqgO_400x400.jpg"
                            }
                        }
                    )}
                />

            </ChapterPageView>
        )
    }
}



export default PictureStack = createStackNavigator({
    Pictures,
    PictureInfo
})

PictureStack.navigationOptions = {
    title: "Photo Album"
}