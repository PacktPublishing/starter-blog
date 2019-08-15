import React from 'react';

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
