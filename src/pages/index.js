import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Utils
import { shorten } from '../utils/truncateStr';

export const options = {
	renderMark: {
		[MARKS.BOLD]: (text) => <b>{text}</b>,
		[MARKS.CODE]: (text) => <i>{text}</i>
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
		[BLOCKS.DOCUMENT]: (node, children) => <div>{children}</div>
	}
};

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const { title, subtitle, author } = data.site.siteMetadata;
		const posts = data.allContentfulPosts.edges;
		const profilePic = data.profilePic.childImageSharp.fluid;

		return (
			<Layout>
				<base href="/post/" />
				<SEO title="All posts" />
				<div className="blog-container">
					<section>
						<ul className="post-summary">
							{data.allContentfulPosts.edges.map((edge) => (
								<li>
									{/* <a href={edge.node.slug}>{edge.node.title}</a> */}
									<p>
										{!edge.node.content ? (
											'[empty]'
										) : (
											documentToReactComponents(edge.node.content.json, options)
										)}
									</p>
									<Link to={post.node.slug}>
										<button data-gtm="read-more" id={`data::${edge.node.slug}`}>
											Read more
										</button>
									</Link>
								</li>
							))}
						</ul>

						{/* <div className="post-summary" key={index}>
									<p>{post.node.date}</p>
									<h2>{post.node.title}</h2>

									<Link to={post.node.slug}>
										<button data-gtm="read-more" id={`data::${post.node.slug}`}>
											Read more
										</button>
									</Link>
								</div> */}
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
					content {
						json
					}
				}
			}
		}
	}
`;
