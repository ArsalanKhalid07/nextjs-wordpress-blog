import graphqlRequest  from "./graphqlRequest"

export async  function getAllPosts() {
    const query = {
        query: `
                query NewQuery {
        posts {
            nodes {
            title
            slug
            excerpt
            date
            featuredImage {
                node {
                mediaDetails {
                    file
                    sizes {
                    sourceUrl
                    width
                    height
                    }
                }
                }
            }
            }
            pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
            }
        }
        categories {
            nodes {
            name
            slug
            }
        }
        }
        `
    }
    const resjson = await graphqlRequest(query);
    const getAllPosts = resjson.data.posts;
    return getAllPosts;
}