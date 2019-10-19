# Starter Blog
___Created by Rachelle Rathbone___.

## #SectionThree
### Source Plugins
**What was covered in this section:**
- What is a source plugin and what do they do?
- Writing a query to retrieve filesystem data
- Updating our config to retrieve more filesystem data

### Transformer Plugins
**What was covered in this section:**
- The role of the transformer plugin
- Installing our first transformer plugin and updating our config
- Writing a GraphQL query to get the content from our markdown file

**Resources**:
- Install [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=transform) to parse the content of your markdown files.

### Welcome to the Gatsby Plugin Library
**What was covered in this section:**
- Introducing the Gatsby Plugin Library.
- Installing more plugins to use in our app.
- Updating our config.

**Resources:**
- [Plugin Library](https://www.gatsbyjs.org/plugins/)
- Install [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/?=sitemap) to help search engines identify the purpose of your pages.
- Install [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/) for in-depth website analytics.
- Install [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/?=tagma) so you can add tracking on your site.

### Tracking Events with Plugins
**What was covered in this section:**
- Why tracking is an important part of any production site and how you can utilize it.
- Setting up a Google Analytics account.
- Updating our config and testing that tracking is working.

**Resources:**
- [Google Analytics Account Creation](https://analytics.google.com/analytics/web/provision/?authuser=2#/provision)

### Increase Your Click Rates with Social Cards
**What was covered in this section:**
- What social cards are used for.
- Installing the gatsby-remark-social-cards plugin and updating our config.
- Making some more changes to our seo.js to include social card metadata.

**Resouces:**
- Install [gatsby-plugin-social-cards](https://www.gatsbyjs.org/packages/gatsby-remark-social-cards/) to increase click rates.

**Options for your social card plugin config:**
```
options: {
  title: {
    field: "title",
    font: "DejaVuSansCondensed",
    color: "black", // black|white
    size: 48, // 16|24|32|48|64
    style: "bold", // normal|bold|italic
    x: null, // Will default to xMargin
    y: null, // Will default to yMargin
  },
  meta: {
    parts: [
      "- ",
      { field: "author" },
      " » ",
      { field: "date", format: "mmmm dS" },
    ],
    font: "DejaVuSansCondensed",
    color: "black", // black|white
    size: 24, // 16|24|32|48|64
    style: "normal", // normal|bold|italic
    x: null, // Will default to xMargin
    y: null, // Will default to cardHeight - yMargin - size
  },
  background: "#FFFFFF", // Background color for the card
  xMargin: 24, // Edge margin used when x value is not set
  yMargin: 24,// Edge margin used when y value is not set
}

```
