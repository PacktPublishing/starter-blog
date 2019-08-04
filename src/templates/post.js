import React from 'react';
import { graphql, Link } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class PostTemplate extends React.Component {
	render() {
		const content = this.props.data.contentfulPosts;
		const { title, subtitle, description, date, slug, childContentfulPostsContentRichTextNode } = content;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout title={title} subtitle={subtitle}>
				<SEO title={title} description={description} />
				<section className="posts">
					<p className="date">{date}</p>
					{childContentfulPostsContentRichTextNode.json.content.map((postContent) => {
						postContent.content.map((type) => {
							return <div dangerouslySetInnerHTML={{ __html: type.value }} />;
						});
					})}

					{/* <div dangerouslySetInnerHTML={{ __html: post }} /> */}
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
					</ul>
				</section>
			</Layout>
		);
	}
}

export default PostTemplate;

export const pageQuery = graphql`
	query Posts($slug: String!) {
		contentfulPosts(slug: { eq: $slug }) {
			title
			subtitle
			description
			slug
			date(formatString: "MMMM DD, YYYY")
			childContentfulPostsContentRichTextNode {
				json
			}
		}
	}
`;
