// @ts-nocheck
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Utils
import { shorten } from '../utils/truncateStr';

// Assets
// import profilePic from '../../content/assets/profile-pic.png'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const document = {
	nodeType: 'document',
	data: {},
	content: [
		{
			nodeType: 'paragraph',
			data: {},
			content: [
				{
					nodeType: 'text',
					value: 'Hello world!',
					marks: [],
					data: {}
				}
			]
		}
	]
};

documentToReactComponents(document); // -> <p>Hello world!</p>
class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;

		const { title, author } = data.site.siteMetadata;
		// const posts = data.allContentfulPosts.edges;
		const profilePic = data.profilePic.childImageSharp.fluid;

		return (
			// <Layout title={title} subtitle="Built with React and Gatsby">
			<Layout title={title} subtitle="Built with React and Gatsby">
				<SEO title="All posts" />
				<div className="blog-container">
					<section>
						{/* {posts.map((post, index) => {
							return (
								<div className="post-summary" key={index}>
									<p>{post.node.date}</p>
									<h2>{post.node.title}</h2>
									<div
										className="content"
										dangerouslySetInnerHTML={{
											__html: shorten(post.node.content.childContentfulRichText.html, 200)
										}}
									/>
									<Link to={post.node.slug}>
										<button data-gtm="read-more" id={`data::${post.node.slug}`}>
											Read more
										</button>
									</Link>
								</div>
							);
						})} */}
					</section>
					<aside>
						<Img fluid={profilePic} alt={`Author ${author}`} />
						<h3>{author}</h3>
						<p>
							Goat gouda who moved my cheese. Red leicester edam port-salut cream cheese pepper jack
							halloumi jarlsberg mozzarella. Boursin cheese strings manchego bocconcini croque monsieur
							cheese slices the big cheese fromage.
						</p>
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
			}
		}
		profilePic: file(absolutePath: { regex: "/profile-pic.png/" }) {
			childImageSharp {
				fluid(maxWidth: 400, maxHeight: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

// allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// 	edges {
// 		node {
// 			excerpt
// 			fields {
// 				slug
// 			}
// 			html
// 			frontmatter {
// 				date(formatString: "MMMM DD, YYYY")
// 				title
// 				description
// 			}
// 		}
// 	}
// }
// allContentfulPosts {
// 	edges {
// 		node {
// 			title
// 			subtitle
// 			description
// 			date
// 			content {
// 				childContentfulRichText {
// 					html
// 				}
// 			}
// 			slug
// 		}
// 	}
// }
