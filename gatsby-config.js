module.exports = {
	siteMetadata: {
		title: `Starter Blog`,
		author: `Rachelle Rathbone`,
		bio: `Teacher turned engineer, Rachelle is a software engineer and mother of one, with a killer Australian accent.`,
		description: `A blog that shows you the awesome power of gatsby.`,
		social: {
			twitter: `coding_love`
		},
		siteUrl: `http://localhost:9000`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/posts`,
				name: `blogPosts`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {}
		},
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
		}
	]
};
