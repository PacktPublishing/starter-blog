import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout
        title="Starter Blog"
        subtitle="Built with React and Gatsby"
      >
        <SEO title="About"/>
        <div>
          <p>Go to <Link to="/">Home Page</Link></p>
          <section>
            ABOUT PAGE
          </section>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
