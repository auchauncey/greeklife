import gql from "graphql-tag"
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput'

// Component Imports
import { WHITE } from '../../../util/settings'
import { userChapterColor } from '../../../../App'
import { currentUser } from '../../../../App'
import { randomString } from '../../../util/utils'
import { ChapterPageView } from "../MyChapterDrawer";

// GraphQL
import { Mutation } from "react-apollo"
import { GET_POSTS } from "../../../api/queries";

export default class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
            postContent: ''
        }
    }
    static navigationOptions = ({ navigation, state }) => {
        return {
            title: "Create New Post",
            headerLeft: (
                <Text
                    style={{ fontSize: 16, color: WHITE, marginLeft: 10 }}
                    onPress={() => navigation.navigate('Bulletin')}
                >
                    Cancel
                </Text>
            ),
            headerRight: (
                <Mutation
                    mutation={ADD_NEW_POST}
                    onCompleted={() =>
                        navigation.navigate('Bulletin')
                    }
                    update={(cache, { data: { createChapterFeedPost } }) => {
                        const { allChapterFeedPosts } = cache.readQuery({ query: GET_POSTS, variables: { offset: 0, numberOfResults: 12 } });

                        console.log("p : " + JSON.stringify(createChapterFeedPost))
                        console.log("before : " + JSON.stringify(cache.readQuery({ query: GET_POSTS, variables: { offset: 0, numberOfResults: 12 } }).allChapterFeedPosts))
                        cache.writeQuery({
                            query: GET_POSTS,
                            data: { allChapterFeedPosts:[createChapterFeedPost]}
                        });
                        console.log("after : " + JSON.stringify(cache.readQuery({ query: GET_POSTS, variables: { offset: 0, numberOfResults: 12 } }).allChapterFeedPosts))
                    }}
                >
                    {(addNewPost, { data, error }) => (
                        <Text
                            style={{ fontSize: 16, color: WHITE, marginRight: 10, fontWeight: "bold" }}
                            onPress={() => {
                                Alert.alert(
                                    'Create Post',
                                    'Are you sure you\'d like to create this post?',
                                    [
                                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                        {
                                            text: 'Yes', onPress: () => {
                                                addNewPost({ variables: { userId: currentUser, postTitle: randomString(10), postContent: randomString(25) } });
                                                // if (!error)
                                                // navigation.navigate('Bulletin')
                                                // else
                                                //     navigation.navigate('penis')
                                            }
                                        },
                                    ]
                                )
                            }
                            }
                        >
                            Submit
                        </Text>
                    )}
                </Mutation>

            ),
            headerTintColor: WHITE,
            headerStyle: { backgroundColor: userChapterColor },
        }
    }

    _onChangePostTitleTextInput(event) {
        this.setState({
            postTitle: event.nativeEvent.text || ''
        });
    }

    _onChangePostContentTextInput(event) {
        this.setState({
            postContent: event.nativeEvent.text || ''
        });
    }

    render() {
        console.log(this.props.navigation.getParam('test', 'whoops'))
        return (
            <ChapterPageView style={styles.container}>
                <Text style={styles.textAreaTitleText}>Post Title</Text>
                <AutoGrowingTextInput
                    placeholder={'Post title'}
                    style={styles.titleTextAreaContainer}
                    onChange={(event) => this._onChangePostTitleTextInput(event)}
                />
                <Text style={styles.textAreaTitleText}>Post Content</Text>
                <AutoGrowingTextInput
                    placeholder={'Post Content'}
                    style={styles.textAreaContainer}
                    onChange={(event) => this._onChangePostContentTextInput(event)}
                />
            </ChapterPageView>
        )
    }
}

/*
 *
 */
const ADD_NEW_POST = gql`
    mutation CreateChapterFeedPost($userId:ID!,$postTitle:String!, $postContent:String!) {
        createChapterFeedPost(userId: $userId, postTitle:$postTitle, postContent:$postContent) {
            id
            postTitle
            postContent
            createdAt
            user {
                id
                name
            }
        }
    }
`


/*
 *
 */
const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        paddingTop: 10
    },
    textAreaTitleText: {
        fontSize: 16,
        marginBottom: 3
    },
    submitButton: {
        backgroundColor: "#ADDFFF",
        height: 50,
        width: 100
    },
    titleTextAreaContainer: {
        padding: 5,
        width: "100%",
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "grey",
        marginBottom: 10
    },
    textAreaContainer: {
        padding: 5,
        width: "100%",
        minHeight: 150,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "grey",
    }
})