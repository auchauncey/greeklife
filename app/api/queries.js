import gql from 'graphql-tag';

/**
 * Fetch posts for the Bulletin.js component
 */
const GET_POSTS = gql`
    query FetchPosts($offset:Int, $numberOfResults:Int) {
        allChapterFeedPosts(filter: {
            user: {
                subchapter: {
                    id: "cjfb8z1w54vwr0183w2ggtz3g"
                }
            }
        },
        orderBy:createdAt_DESC,
        skip:$offset,
        first:$numberOfResults
        ) {
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

/**
 * Get current user during initial application loading
 */

const GET_USER = gql`
  query GetUser($userId:ID) {
    User(id: $userId) {
      id
      name
      subchapter {
        id
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


export { GET_POSTS, GET_USER }