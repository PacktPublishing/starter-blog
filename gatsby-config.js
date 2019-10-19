require('dotenv').config();

const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};

module.exports = {
	siteMetadata: {
		title: `Starter Blog`,
		subtitle: `Built with React and Gatsby`,
		author: `Rachelle Rathbone`,
		description: `A blog that shows you the awesome power of gatsby.`,
		bio: `Teacher turned engineer, Rachelle is a software engineer and mother of one, with a killer Australian accent.`,
		social: {
			twitter: `coding_love`
		},
		siteUrl: `https://dazzling-thompson-cbfe48.netlify.com`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Starter Blog`,
				short_name: `Blog`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: `content/assets/cheese-icon.png`
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-140917292-1`,
				head: true
			}
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: `GTM-NJ3SJD6`,
				includeInDevelopment: true
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: contentfulConfig
		}
	]
};
