const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPost = path.resolve(`./src/templates/post.js`);
	return graphql(
		`
      {
        allContentfulPosts(sort: { fields: [date], order: DESC } limit:1000) {
          edges {
            node {
              title
              subtitle
              description
              date
              slug
              content {
                json
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

		const posts = result.data.allContentfulPosts.edges;

		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node;

			createPage({
				path: post.node.slug,
				component: blogPost,
				context: {
					slug: post.node.slug,
					previous,
					next
				}
			});
		});

		return null;
	});
};
