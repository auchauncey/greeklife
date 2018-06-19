import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native'


// Component Imports
import { defaultChapterHeaderStyles } from '../MyChapterDrawer'

import MenuHamburger from '../../../components/MenuHamburger'
import BulletinCard from './BulletinCard';
import BulletinCardExpanded from './BulletinCardExpanded';
import { userChapterColor } from '../../../../App'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TempLoading from '../../../components/TempLoading';
import TempError from '../../../components/TempError';


class Bulletin extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Chapter Bulletin",
            headerBackTitle: 'Back',
            headerLeft: (
                <MenuHamburger onPress={() => navigation.openDrawer()} />
            ),
            headerTintColor: "white",
            headerStyle: { backgroundColor: userChapterColor },
            // ...defaultChapterHeaderStyles
        }
    }
    render() {
        return (
            <ScrollView>
                <Query query={GET_POSTS}>
                    {({ loading, error, data }) => {
                        if (loading)
                            return <TempLoading />
                        if (error)
                            return <TempError />
                        console.log(data.allChapterFeedPostses)
                        return data.allChapterFeedPostses.map(({ id, postTitle, postContent }) => {
                            return <BulletinCard key={id} title={postTitle} content={postContent}/>
                        })
                    }}
                </Query>
            </ScrollView>
        )
    }
}

export default BulletinStack = createStackNavigator({
    Bulletin,
    BulletinCardExpanded
})

BulletinStack.navigationOptions = {
    title: "Bulletin"
}

const GET_POSTS = gql`
    {
        allChapterFeedPostses(filter: {		
            user: {
                subchapter: {
                   id:"cjfb8z1w54vwr0183w2ggtz3g"
                }
            }
        }) {
            id
            postTitle
            postContent
        }
    }
`