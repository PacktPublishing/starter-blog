import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const { title, subtitle, author } = data.site.siteMetadata;
		const posts = data.allContentfulPosts.edges;
		const profilePic = data.profilePic.childImageSharp.fluid;

		return (
			<Layout title={title} subtitle={subtitle}>
				<base href="/post/" />
				<SEO title="All posts" />
				<div className="blog-container">
					<section>
						{posts.map(
							(post) =>
								post.node.content && (
									<div className="post-summary" key={post.node.title}>
										<p>{post.node.date}</p>
										<h2>{post.node.title}</h2>
										<p>{post.node.description}</p>

										<Link to={post.node.slug}>
											<button data-gtm="read-more" id={`data::${post.node.slug}`}>
												Read more
											</button>
										</Link>
									</div>
								)
						)}
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
				subtitle
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
					description
					date(formatString: "MMMM DD, YYYY")
					slug
					content {
						json
					}
				}
			}
		}
	}
`;
