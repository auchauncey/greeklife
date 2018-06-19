import { createDrawerNavigator } from 'react-navigation'

// Component Imports
import BulletinStack from './bulletin/Bulletin'
import PictureStack from './pictures/Pictures'
import { PIKE_COLOR_PRIMARY } from '../../util/settings'

/**
 * Used for header configuration in the components of this directory
 */

let defaultChapterHeaderStyles = {
    headerTintColor: "white",
    headerStyle: {
        backgroundColor: PIKE_COLOR_PRIMARY,
    }
}

export default MyChapterDrawer = createDrawerNavigator({
    BulletinStack,
    PictureStack
})

MyChapterDrawer.navigationOptions = {
    title: "My Chapter"
}

export { defaultChapterHeaderStyles }
