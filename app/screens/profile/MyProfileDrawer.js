import { createDrawerNavigator } from 'react-navigation'

// Component Imports
import ProfileLanding from './landing/ProfileLanding'
import Billing from './billing/Billing'
import { GREEK_LIFE_COLOR_PRIMARY } from '../../util/settings'
import StudyHoursView from './study/StudyHoursView';

/**
 * Used for header configuration in the components of this directory
 */

const defaultProfileHeaderStyles = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: GREEK_LIFE_COLOR_PRIMARY,
  }
}

export default MyProfileDrawer = createDrawerNavigator({
  ProfileLanding,
  Billing,
  StudyHoursView
})

MyProfileDrawer.navigationOptions = {
  title: "My Profile"
}

export { defaultProfileHeaderStyles }