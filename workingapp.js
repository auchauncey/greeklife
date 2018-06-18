import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

class Bulletin extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Chapter Bulletin",
      headerLeft: (
        <Button
          onPress={() => navigation.openDrawer()}
          title="drawer"
          color="red"
        />
      )
    }
  }
  render() {
    return (
      <SafeAreaView>
        <Text>Chapter</Text>
        <Button title="drawer" onPress={() => this.props.navigation.openDrawer()} />
      </SafeAreaView>
    )
  }
}

const BulletinStack = createStackNavigator({
  Bulletin
})


class Pictures extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Chapter Memories",
      headerBackTitle: 'Back',
      headerLeft: (
        <Button
          onPress={() => navigation.openDrawer()}
          title="drawer"
          color="red"
        />
      )
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Pictures</Text>
        <Button
          title="drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <Button
          title="picture info"
          onPress={() => this.props.navigation.navigate(
            'PictureInfo', {
              "pictureInfo": { title: "Cute Pic Bro", imageUrl: "http://google.com" }
            }
          )}
        />

      </SafeAreaView>
    )
  }
}

class PictureInfo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("pictureInfo").title || "Picture Info"
    return {
      title
    }
  }
  render() {
    return (
      <SafeAreaView>
        <Text>Pictures</Text>
      </SafeAreaView>
    )
  }
}

const PictureStack = createStackNavigator({
  Pictures,
  PictureInfo
})

PictureStack.navigationOptions = {
  headerBackTitle: 'some label'
}
const MyChapter = createDrawerNavigator({
  BulletinStack,
  PictureStack
})
/**
 * 
 * 
 * 
 */
class MyCampus extends React.Component {
  render() {
    return (
      <View>
        <Text>My Campus</Text>
      </View>
    )
  }
}

/**
 * 
 * 
 * 
 */
class ProfileLanding extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>My Profile Landing</Text>
        <Button
          title="drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </SafeAreaView>
    )
  }
}
class Billing extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>My Billing</Text>
        <Button
          title="drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </SafeAreaView>
    )
  }
}

const MyProfile = createDrawerNavigator({
  ProfileLanding,
  Billing
})

const ApplicationStack = createBottomTabNavigator({
  MyChapter: MyChapter,
  MyCampus: MyCampus,
  MyProfile: MyProfile
})

class AuthenticationLoading extends React.Component {
  render() {
    return (
      <View>
        <Text>AuthenticationLoading</Text>
      </View>
    )
  }
}


class SignMeIn extends React.Component {
  render() {
    return (
      <View>
        <Text>SignMeIn</Text>
      </View>
    )
  }
}

const AuthenticationStack = createStackNavigator({
  SignMeIn: SignMeIn
})

export default AppSwitchNavigator = createSwitchNavigator({
  ApplicationStack: ApplicationStack,
  AuthenticationStack: AuthenticationStack,
  AuthenticationLoading: AuthenticationLoading
})