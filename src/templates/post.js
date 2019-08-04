import React from 'react';
import { graphql, Link } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class PostTemplate extends React.Component {
	render() {
		// const content = this.props.data.contentfulPosts;

		// const { title, subtitle, description, date, slug } = content;
		// const post = this.props.data.contentfulPosts.content.childContentfulRichText.html;
		// const { previous, next } = this.props.pageContext;
		// console.log(post);

		return (
			// <Layout title={title} subtitle={subtitle}>
			// 	<SEO title={title} description={description} />
			<section className="posts">
				{/* <p className="date">{date}</p>
					<div dangerouslySetInnerHTML={{ __html: post }} />
					<ul>
						<li className="post-navigation">
							{previous && (
								<Link to={previous.slug} rel="prev">
									← {previous.title}
								</Link>
							)}
						</li>
						<li className="post-navigation">
							{next && (
								<Link to={next.slug} rel="next">
									{next.title} →
								</Link>
							)}
						</li>
					</ul> */}
			</section>
			// </Layout>
		);
	}
}

export default PostTemplate;

// export const pageQuery = graphql`
// 	query Posts {
// 		contentfulPosts {
// 			title
// 			subtitle
// 			description
// 			slug
// 			date(formatString: "MMMM DD, YYYY")
// 			content {
// 				childContentfulRichText {
// 					html
// 				}
// 			}
// 		}
// 	}
// `;
// export const pageQuery = graphql`
// 	query Posts($slug: String!) {
// 		markdownRemark(fields: { slug: { eq: $slug } }) {
// 			id
// 			excerpt(pruneLength: 160)
// 			html
// 			frontmatter {
// 				title
// 				date(formatString: "MMMM DD, YYYY")
// 				subtitle
// 				description
// 			}
// 		}
// 	}
// `;
