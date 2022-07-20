const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allCosmicjsIndex {
      nodes {
        metadata {
          meta_data {
            seo_description
            seo_title
          }
          headline
          hero_image {
            url
          }
        }
        content
      }
    }
  }
`)
  const templatePath = path.resolve(`./src/templates/index.js`)
  
  result.data.allCosmicjsIndex.nodes.forEach((node) => {
    createPage({
      path: '/',
      component: templatePath,
      context: {
        content: node
      },
    })
  })
}
