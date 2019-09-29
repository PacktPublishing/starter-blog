import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, slug }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						description
						author
						siteUrl
					}
				}
			}
		`
	);
	const metaDescription = description || site.siteMetadata.description;
	let twitterCardUrl = '';

	if (slug === '/') {
		twitterCardUrl = `${site.siteMetadata.siteUrl}/twitter-card.jpg`;
	} else {
		twitterCardUrl = `${site.siteMetadata.siteUrl}/${slug}/twitter-card.jpg`;
	}

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: metaDescription
				},
				{
					name: `twitter:image`,
					content: `${twitterCardUrl}`
				}
			].concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
	slug: `/`
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
	slug: PropTypes.string
};

export default SEO;
