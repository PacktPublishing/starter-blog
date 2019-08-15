const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogPost = path.resolve(`./src/templates/post.js`);

	return graphql(
		`
        {
            query markdown {
                allMarkdownRemark(sort:{ fields: [frontmatter___date], order: DESC} limit:1000) {
                  edges {
                    node {
                      frontmatter {
                        title
                        subtitle
                        description
                      }
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
				component: blogPost
			});
		});
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
