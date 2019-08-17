import React from 'react';
import { Link, graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Utils
import { shorten } from '../utils/truncateStr';

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const blogTitle = data.site.siteMetadata.title;
		const authorName = data.site.siteMetadata.author;
		const posts = data.allMarkdownRemark.edges;
		const bio = data.site.siteMetadata.bio;

		return (
			<Layout title={blogTitle} subtitle="Built with React and Gatsby">
				<SEO title="All posts" />
				<div className="blog-container">
					<section>
						{posts.map((post, index) => {
							return (
								<div className="post-summary" key={index}>
									<p>{post.node.frontmatter.date}</p>
									<h2>{post.node.frontmatter.title}</h2>
									<div
										className="content"
										dangerouslySetInnerHTML={{ __html: shorten(post.node.html, 300) }}
									/>
									<Link to={post.node.fields.slug}>
										<button>Read more</button>
									</Link>
								</div>
							);
						})}
					</section>
					<aside>
						<p>We'll put a profile pic here later</p>
						<h3>{authorName}</h3>
						<p>{bio}</p>
					</aside>
				</div>
			</Layout>
		);
	}
}

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				author
				bio
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					html
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`;
