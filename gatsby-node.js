/*
exports.createPages = async ({ actions, graphql, reporter }) => {

  // query content for WordPress posts
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPost } = result.data
  
  const worksTemplate = path.resolve(`./src/pages/works/{worksTemplate}.js`)

  allPosts.forEach((post) => {
    createPage({
      // will be the url for the page
      path: `/works/${post.slug}`,
      // specify the component template of your choice
      component: slash(worksTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })
}
*/
