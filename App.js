import { createSwitchNavigator, } from 'react-navigation';
import ApplicationStack from './app/ApplicationStack';
import AuthenticationStack from './app/screens/auth/AuthenticationStack'
import AuthStatusLoadingScreen from './app/screens/auth/AuthStatusLoadingScreen'

import React from 'react'

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { Text, SafeAreaView, ActivityIndicator } from 'react-native';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://api.graph.cool/simple/v1/cjf9z8lis7my60179c8yfiutz' });

let userChapterColor = "white"
let userCampusColor = "black"

const GET_USER = gql`
  query {
    User(id: "cjffip0dnf0wv0132aprzz1ig") {
      name
      subchapter {
        names
        chapter {
          primaryColors
        }
        campus {
          primaryColor
        }
      }
    }
  }
`

const AppSwitchNavigator = createSwitchNavigator({
  ApplicationStack: ApplicationStack,
  AuthenticationStack: AuthenticationStack,
  AuthenticationLoading: AuthStatusLoadingScreen
})


export default ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

/**
 * Temporary loading solution
 */
const App = () => (
  <Query query={GET_USER}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <SafeAreaView>
            <Text>Loading...</Text>
          </SafeAreaView>
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
        <AppSwitchNavigator />
      )
    }}
  </Query>
)

export { userChapterColor, userCampusColor }