import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Layout({ title, subtitle, children }) {
	const { home } = useStaticQuery(
		graphql`
			query {
				home: file(absolutePath: { regex: "/home.png/" }) {
					childImageSharp {
						fluid(maxWidth: 10, maxHeight: 10) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`
	);

	const homeIcon = home.childImageSharp.fluid;

	return (
		<div className="app-container">
			<div className="homeLinkContainer">
				{title !== 'Starter Blog' && (
					<Link to="/">
						<Img fluid={homeIcon} alt="Link to go to home page" />
					</Link>
				)}
			</div>
			<header>
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</header>
			<main>{children}</main>
			<footer>© {new Date().getFullYear()}, Rachelle Rathbone</footer>
		</div>
	);
}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default Layout;
