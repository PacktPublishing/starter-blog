const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogPost = path.resolve(`./src/templates/post.js`);

	return graphql(
		`
        {
            allMarkdownRemark(sort:{ fields: [frontmatter___date], order: DESC} limit:1000) {
              edges {
                node {
                  frontmatter {
                    title
                    subtitle
                    description
                  }
                  fields {
                      slug
                  }
                }
              }
            }
        }
        `
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}

		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach((post) => {
			createPage({
				path: post.node.fields.slug,
				component: blogPost
			});
		});

		return null;
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });

		createNodeField({
			name: `slug`,
			node,
			value
		});
	}
};
