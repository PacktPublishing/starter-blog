import React from 'react';
import { graphql, Link } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

export const options = {
	renderMark: {
		[MARKS.BOLD]: (text) => <b>{text}</b>,
		[MARKS.CODE]: (text) => <i>{text}</i>
	},
	renderNode: {
		// [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next.replace(/\n/g, '<br/>')}</p>`,
		// [BLOCKS.PARAGRAPH]: (node) => `<p>${node.content.replace(/\n/g, '<br/>')}</p>`,
		// [BLOCKS.PARAGRAPH]: (node, next) => {
		// 	next.map((n) => {
		// 		// return `<p>${n.replace(/\n/g, '<br/>')}</p>`;
		// 		console.log(n);
		// 	});
		// 	// const { description, file } = node.data.target.fields;

		// 	// return <img alt={description ? description['en-US'] : null} src={file['en-US'].url} />;
		// },
		[BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
		[BLOCKS.DOCUMENT]: (node, children) => <div>{children}</div>,
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			// const { description, file } = node.data.target.fields;
			// return <img alt={description ? description['en-US'] : null} src={file['en-US'].url} />;
		}
	}
};

class PostTemplate extends React.Component {
	render() {
		const postContent = this.props.data.contentfulPosts;
		const { title, subtitle, description, date, content } = postContent;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout title={title} subtitle={subtitle}>
				<SEO title={title} description={description} />
				<section className="posts">
					<p className="date">{date}</p>
					{content && documentToReactComponents(content.json, options)}
					<br />
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
			date(formatString: "MMMM DD, YYYY")
			content {
				json
			}
		}
	}
`;
