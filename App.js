import React from 'react'
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { Text, SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';

// Component Imports
import SplashScreen from './app/components/SplashScreen';
import { createSwitchNavigator, } from 'react-navigation';
import ApplicationStack from './app/ApplicationStack';
import AuthenticationStack from './app/screens/auth/AuthenticationStack'
import AuthStatusLoadingScreen from './app/screens/auth/AuthStatusLoadingScreen'
import tinycolor from 'tinycolor2'
// GraphQL
import { GET_USER } from './app/api/queries'

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://api.graph.cool/simple/v1/cjf9z8lis7my60179c8yfiutz' });

let userChapterColor = "white"
let userCampusColor = "black"
let currentUser = "cjffip19wf0ir01677i42cwsr"

export default ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

/**
 * Temporary loading solution
 */
const App = () => (
  <Query query={GET_USER} variables={{ userId: currentUser }}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <SplashScreen />
        );
      if (error)
        return (
          <SafeAreaView>
            <Text>Error</Text>
          </SafeAreaView>
        );
      userChapterColor = "#" + data.User.subchapter.chapter.primaryColors
      userCampusColor = "#" + data.User.subchapter.campus.primaryColor
      return (
        <AppSwitchNavigator >
          <StatusBar
            barStyle={tinycolor(userChapterColor).isDark() ? "light-content" : "dark-content"}
          />
        </AppSwitchNavigator >
      )
    }}
  </Query >
)

const AppSwitchNavigator = createSwitchNavigator({
  ApplicationStack: ApplicationStack,
  AuthenticationStack: AuthenticationStack,
  AuthenticationLoading: AuthStatusLoadingScreen
})

export { userChapterColor, userCampusColor, currentUser }