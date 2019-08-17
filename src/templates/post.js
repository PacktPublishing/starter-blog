import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

class PostTemplate extends React.Component {
	render() {
		return (
			<Layout title="A title" subtitle="A subtitle">
				<SEO title="Another title" description="A description" />
				<section className="posts">Things will happen here soon.</section>
			</Layout>
		);
	}
}

export default PostTemplate;

export const pageQuery = graphql`
 query Posts($slug: String!) {
   markdownRemark(fields: { slug: { eq: $slug } }) {
     id
     excerpt(pruneLength: 160)
     html
     frontmatter {
       title
       date(formatString: "MMMM DD, YYYY")
       description
     }
   }
 }
`
