import React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const blogTitle = data.site.siteMetadata.title
    const authorName = data.site.siteMetadata.author

    return (
      <Layout
        title={blogTitle}
        subtitle="Built with React and Gatsby"
      >
        <SEO title="All posts"/>
        <div className="blog-container">
          <section>
            <div className="post-summary">
              <p>May 4th, 2019</p>
              <h2>Cheddar cheese and biscuits</h2>
              <p>Cheese and wine rubber cheese airedale cottage cheese the
              big cheese stinking bishop cheesecake st. agur blue cheese. Cow
              rubber cheese cheese triangles say cheese cheese on toast cheddar
              red leicester swiss. </p>
              <button data-gtm="read-more">Read more</button>
            </div>
            <div className="post-summary">
              <p>May 13th, 2019</p>
              <h2>Cheese on toast babybel babybel</h2>
              <p>
                Pecorino fondue manchego who moved my cheese babybel hard
                cheese fromage roquefort. Roquefort port-salut cheeseburger
                cheese on toast jarlsberg red leicester chalk and cheese
                fromage.
              </p>
              <button data-gtm="read-more">Read more</button>
            </div>
          </section>
          <aside>
            <p>We'll put a profile pic here later</p>
            <h3>
              {authorName}
            </h3>
            <p>
              Goat gouda who moved my cheese. Red leicester edam port-salut
              cream cheese pepper jack halloumi jarlsberg mozzarella. Boursin
              cheese strings manchego bocconcini croque monsieur cheese slices
              the big cheese fromage.
            </p>
          </aside>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
