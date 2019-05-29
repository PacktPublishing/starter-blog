# Starter Blog
___Created by Rachelle Rathbone___.

**Jump Ahead:**
- [Section 1: Getting Started with Gatsby JS](#sectionone)
- [Section 2: Querying Data with GraphQL](#sectiontwo)
- [Section 3: Gatsby Plugins](#sectionthree)

## #SectionOne
## Getting Started with Gatsby JS

### What is GatsbyJS?
**What was covered in this section:**
* What is GatsbyJS?
* How it works and why it could be a useful tool for you.
* The Gatsby community and noteworthy people to follow on Twitter.

**Resources:**
* Download [Discord](https://discordapp.com/), click the plus button in the left panel, then 'Join a server', and type in 'reactiflux'. Once you've joined this server, scroll through the list on the left until you reach 'Tools' then click on the #gatsby tag. This is a great place for you to come if you ever get stuck and are looking for help.

### Installing Gatsby and cloning our Gatsby project
**What was covered in this section:**
* Installing Gatsby globally and cloning our Gatsby repository.
* A walkthrough of the structure of our application.
* Running our app!

**Resources:**
* Something went wrong when trying to install Gatsby globally? Maybe you missed an important [prerequisite](https://www.gatsbyjs.org/tutorial/part-zero/)
* Non-boring [lorem ipsum](https://www.shopify.com/partners/blog/79940998-15-funny-lorem-ipsum-generators-to-shake-up-your-design-mockups).
* You might also like [bacon ipsum](https://baconipsum.com/) or [Chuck Norris ipsum](https://vincentloy.github.io/chuck_facts_ipsum/).

**NOTE**: The contents of this app's .gitignore file are fairly standard and seen
in other Gatsby starter kits and examples. When the course is over, if you choose
to continue working with this application, it may be a good idea to remove
anything that you don't need from this file.

### Typography and styling
**What was covered in this section:**
* Why we are using typography, how it's set up, and how you can make changes
* How we'll style our application
* Other styling alternatives available in GatsbyJS

**Resources:**
* [typography.js](https://www.gatsbyjs.org/docs/typography-js/)
* Learn more about [typography](https://kyleamathews.github.io/typography.js/).
* More on [styling](https://www.gatsbyjs.org/tutorial/part-two/#css-in-js) with Gatsby.

### Using React Helmet to add metadata
**What was covered in this section:**
* Installing the gatsby-plugin-react-helmet and discussing why we need it.
* Creating out seo.js file and adding some basic content
* Add our new SEO component to our blog

**Code you won't want to type:**
```
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
       content: `Rachelle Rathbone`,
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
```

**Resources:**
* Install [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) to easily add metadata to your site.

### Creating a new page and linking between pages
**What was covered in this section:**
* Duplicating our index page so we have a dummy second page to link to
* Adding a temporary element on each page that we'll use to link pages
* Importing Gatsby's link component and linking our pages


## #SectionTwo
## Querying Data with GraphQL

### Introduction to GraphQL
**What was covered in this section:**
* What GraphQL is and how we can use it in our app.
* Introducing the GraphQL playground.
* Writing our first GraphQL queries.

### Querying data in pages with GraphQL
**What was covered in this section:**
- import GraphQL and add our query to our index file
- pass that data into into our component and check out the data in the console
- update some of our content to use our data

**Our query from the first video:**
```
query {
  site {
    siteMetadata {
      title
      author
    }
  }
}
```

### Using the StaticQuery API
**What was covered in this section:**
- Attempting to use a page query inside a component
- What is the Static Query Api?
- Using Static Query to retrieve data directly from a component

### Updating seo.js with useStaticQuery hook
**What was covered in this section:**
- Comparing the StaticQuery component to the useStaticQuery hook.
- Configuring seo.js with our useStaticQuery hook
- Updating seo.js to consume data from our GraphQL query.


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

### Welcome to the Gatsby Plugin Library
**What was covered in this section:**
- Introducing the Gatsby plugin library.
- Exploring other plugin options.
- Installing some more plugins for us to use in our app.

**Resources:**
- [Plugin Library](https://www.gatsbyjs.org/plugins/)

### Tracking Events with Plugins
**What was covered in this section:**
- Why tracking is an important part of any production site and how you can utilize it.
- Setting up a Google Analytics account.
- Updating our config and testing that tracking is working.

**Resources:**
- [Google Analytics Account Creation](https://analytics.google.com/analytics/web/provision/?authuser=2#/provision)

### Increase Your Click Rates with Social Cards
**What was covered in this section:**

**Resources:**


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
  background = "#FFFFFF", // Background color for the card
  xMargin = 24, // Edge margin used when x value is not set
  yMargin = 24,// Edge margin used when y value is not set
}

```
