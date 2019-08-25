// @ts-nocheck
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Utils
import { shorten } from '../utils/truncateStr';

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const { title, author, bio } = data.site.siteMetadata;
		const posts = data.allMarkdownRemark.edges;
		const profilePic = data.profilePic.childImageSharp.fluid;

		return (
			<Layout title={title} subtitle="Built with React and Gatsby">
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
										dangerouslySetInnerHTML={{ __html: shorten(post.node.html, 200) }}
									/>
									<Link to={post.node.fields.slug}>
										<button data-gtm="read-more" id={`data::${post.node.fields.slug}`}>
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
		profilePic: file(absolutePath: { regex: "/profile-pic.png/" }) {
			childImageSharp {
				fluid(maxWidth: 400, maxHeight: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
