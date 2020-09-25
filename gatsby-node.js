const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log(`Created of type ${node.internal.type} at ${fileNode.relativePath} -> ${slug}`)
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}