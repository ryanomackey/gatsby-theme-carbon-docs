const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode });
    const section = slug.split('/')[1];

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });

    createNodeField({
      name: 'section',
      node,
      value: section,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  code {
                    body
                  }
                  headings {
                    value
                    depth
                  }
                  frontmatter {
                    title
                  }
                  fileAbsolutePath
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.error(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: require.resolve(
              './src/components/MarkdownTemplate/index.js',
            ),
            context: {
              id: node.id,
              body: node.code.body,
              headings: node.headings,
              frontmatter: node.frontmatter,
              fileAbsolutePath: node.fileAbsolutePath,
            },
          });
        });
      }),
    );
  });
};
