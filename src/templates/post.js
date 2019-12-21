import React from 'react';
import { graphql, Link } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const options = {
	renderMark: {
		[MARKS.BOLD]: (text) => <b>{text}</b>,
		[MARKS.CODE]: (text) => <code>{text}</code>
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
		[BLOCKS.DOCUMENT]: (node, children) => <div>{children}</div>,
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			if (node.data.target.fields) {
				const { description, file } = node.data.target.fields;

				return <img alt={description ? description['en-US'] : null} src={file['en-US'].url} />;
			} else {
				return null;
			}
		}
	}
};

class PostTemplate extends React.Component {
	render() {
		const postContent = this.props.data.contentfulPost;
		const { title, subtitle, description, date, slug, content } = postContent;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout title={title} subtitle={subtitle}>
				<SEO title={title} description={description} slug={slug} />
				<section className="posts">
					<p className="date">{date}</p>
					{content && documentToReactComponents(content.json, options)}
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
		contentfulPost(slug: { eq: $slug }) {
			title
			subtitle
			description
			date(formatString: "MMMM DD, YYYY")
			slug
			content {
				json
			}
		}
	}
`;
