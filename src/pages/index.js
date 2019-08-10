// @ts-nocheck
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Utils
import { shorten } from '../utils/truncateStr';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
	renderMark: {
		[MARKS.BOLD]: (text) => <Bold>{text}</Bold>
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
	}
};

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const { title, subtitle, author } = data.site.siteMetadata;
		const posts = data.allContentfulPosts.edges;
		const profilePic = data.profilePic.childImageSharp.fluid;
		const postContent = data.allContentfulPosts.edges.map((content) => {
			return documentToReactComponents(content.node.childContentfulPostsContentRichTextNode.json, options);
		});
		console.log(postContent[0][0].props.children[0]);
		return (
			<Layout title={title} subtitle={subtitle}>
				<SEO title="All posts" />
				<div className="blog-container">
					<section>
						{posts.map((post, index) => {
							return (
								<div className="post-summary" key={index}>
									<p>{post.node.date}</p>
									<h2>{post.node.title}</h2>
									<p />
									{/* <div
										className="content"
										dangerouslySetInnerHTML={{
											__html: shorten(
												post.node.childContentfulPostsContentRichTextNode.json.content[0]
													.content[0].value,
												200
											)
										}}
									/> */}
									<Link to={post.node.slug}>
										<button data-gtm="read-more" id={`data::${post.node.slug}`}>
											Read more
										</button>
									</Link>
								</div>
							);
						})}
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
		allContentfulPosts(sort: { fields: [date], order: DESC }) {
			edges {
				node {
					title
					subtitle
					slug
					description
					date(formatString: "MMMM DD, YYYY")
					childContentfulPostsContentRichTextNode {
						json
					}
				}
			}
		}
	}
`;
