import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

// Component Imports
import MenuHamburger from '../../../components/MenuHamburger'
import { defaultProfileHeaderStyles } from '../MyProfileDrawer';

class Billing extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Billing",
      headerBackTitle: 'Back',
      headerLeft: (
        <MenuHamburger onPress={() => navigation.openDrawer()} color="white" />
      ),
      ...defaultProfileHeaderStyles
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Text>My Billing</Text>
      </SafeAreaView>
    )
  }
}


export default BillingStack = createStackNavigator({
  Billing
})