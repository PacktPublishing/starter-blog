import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
<<<<<<< HEAD
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
=======

function SEO({ description, lang, meta, title}) {
  const metaDescription = description
>>>>>>> section-two

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
<<<<<<< HEAD
           content: site.siteMetadata.author,
=======
           content: `Rachelle Rathbone`,
>>>>>>> section-two
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}


export default SEO
