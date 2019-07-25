import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query fordummy {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <p>{data.site.siteMetadata.description}</p>
    )}
  />
)
