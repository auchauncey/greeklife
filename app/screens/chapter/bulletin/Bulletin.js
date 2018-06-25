import React from 'react'
import { Query } from 'react-apollo';
import { FlatList,  View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

// Component Imports
import AddPost from './AddPost';
import BulletinCard from './BulletinCard'
import { userChapterColor } from '../../../../App'
import TempError from '../../../components/TempError'
import TempLoading from '../../../components/TempLoading'
import MenuHamburger from '../../../components/MenuHamburger'
import tinycolor from 'tinycolor2'

// GraphQL
import { GET_POSTS } from '../../../api/queries'
import { getDefaultChapterStyles, ChapterPageView } from '../MyChapterDrawer';

class Bulletin extends React.Component {

    static navigationOptions = ({ navigation }) => {
        let accentColor = tinycolor(userChapterColor).isDark() ? "white" : "black"
        return {
            title: "Chapter Bulletin",
            headerLeft: (
                <MenuHamburger onPress={() => navigation.openDrawer()} color={accentColor} />
            ),
            headerRight: (
                <Icon name="ios-add"
                    size={26} style={{ marginRight: 10, color: accentColor, fontWeight: "600" }}
                    onPress={() => navigation.navigate('AddPost', { test: 1 })}
                />
            ),
            ...getDefaultChapterStyles()
        }
    }

    render() {
        return (
            <Query query={GET_POSTS} variables={{ offset: 0, numberOfResults: 12 }}>
                {({ loading, error, data, refetch, fetchMore }) => {
                    if (loading) {
                        return <TempLoading />
                    }
                    if (error)
                        return <TempError />

                    return (
                        <ChapterPageView style={{ marginTop: 10 }}>
                            <FlatList
                                data={data.allChapterFeedPosts}
                                refreshing={data.networkStatus === 4}
                                onRefresh={() => refetch()}
                                keyExtractor={item => item.id}
                                renderItem={
                                    ({ item }) => {
                                        const { postTitle, postContent, createdAt, user } = item
                                        return <BulletinCard title={postTitle} content={postContent} author={user.name} createdAt={createdAt} />
                                    }
                                }
                                // what % of viewport down must you scroll to trigger onEndReached
                                onEndReachedThreshold={0.90}
                                onEndReached={() => {
                                    fetchMore({
                                        variables: {
                                            offset: data.allChapterFeedPosts.length
                                        },
                                        updateQuery: (prev, { fetchMoreResult }) => {

                                            // Don't do anything if there weren't any new items
                                            if (!fetchMoreResult || fetchMoreResult.allChapterFeedPosts.length === 0)
                                                return prev;


                                            return {
                                                // Append the new allChapterFeedPosts results to the old one
                                                allChapterFeedPosts: prev.allChapterFeedPosts.concat(fetchMoreResult.allChapterFeedPosts),
                                            };
                                        }
                                    });
                                }}

                            />

                        </ChapterPageView>
                    )
                }}
            </Query>
        )
    }
}

export default BulletinStack = createStackNavigator({
    Bulletin,
    AddPost
})

BulletinStack.navigationOptions = {
    title: "Bulletin"
}
