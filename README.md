# Starter Blog

**_Created by Rachelle Rathbone_**.

Hey everyone! Thanks for taking my Packt Publishing course! If you run into any issues while working your way through the sections feel free to ping me on twitter @coding_love or email me at gatsbystartblog@gmail.com. I'll do my best to respond to you as quickly as possible. Happy learning :)

**NOTE: If you try to run `gatsby develop` on the master branch before completing section six, you will get an error. You need to set up a Contentful account and add environment variables to a .env file for this to run without error.**

## Prerequisites

- ReactJS: You should have at least a basic understanding of how React works. The focus of this course is GatsbyJS so while we'll be using React, I won't be covering any React specifics.
- Node version 8 or higher installed: Gatsby supports any version of Node with a status of maintenance, active or current. Node V6 reached its end-of-life status in April 2019 so if you have this version or anything lower installed, Gatsby won’t run on your machine.
  - If you don't already have Node installed you'll need to follow the download instructions on the [nodejs site](https://nodejs.org/en/download/).
  - If it is already installed, check the version by running `node -v` or `node --version`. For those of you 6 or earlier you'll need to do some googling on how to update to a later version. How you do that will vary depending on how it was installed. One tip I will give if you upgrade but then have trouble pointing your machine at the latest version:
    - Install [Homebrew](https://docs.brew.sh/Installation) if you don't already have it.
    - Run `brew install nvm. Nvm is a Node version manager which will make switching between node versions incredibly simple.
    - Add a .nvmrc file to the root of your project and simply add the version number you wish to use to the file. For example, if you installed 10.6.0, in your .nvmrc file all you need to add is: `v10.16.0`

**Jump Ahead:**

- [Section 1: Getting Started with Gatsby JS](#sectionone)
- [Section 2: Querying Data with GraphQL](#sectiontwo)
- [Section 3: Gatsby Plugins](#sectionthree)
- [Section 4: Programmatically Creating Pages](#sectionfour)
- [Section 5: Working with Images in Gatsby](#sectionfive)
- [Section 6: Contentful - Content Infrastructure](#sectionsix)
- [Section 7: Working with Images in Gatsby](#sectionseven)

## #SectionOne

### What is GatsbyJS?

**What was covered in this section:**

- What is GatsbyJS?
- How it works and why it could be a useful tool for you.
- The Gatsby community and noteworthy people to follow on Twitter.

**Resources:**

- Download [Discord](https://discordapp.com/), click the plus button in the left panel, then 'Join a server', and type in 'reactiflux'. Once you've joined this server, scroll through the list on the left until you reach 'Tools' then click on the #gatsby tag. This is a great place for you to come if you ever get stuck and are looking for help.

### Installing Gatsby and cloning our Gatsby project

**What was covered in this section:**

- Installing Gatsby globally and cloning our [Gatsby repository](https://github.com/PacktPublishing/starter-blog).
- A walkthrough of the structure of our application.
- Running our app!

**Resources:**

- Something went wrong when trying to install Gatsby globally? Maybe you missed an important [prerequisite](https://www.gatsbyjs.org/tutorial/part-zero/)
- Non-boring [lorem ipsum](https://www.shopify.com/partners/blog/79940998-15-funny-lorem-ipsum-generators-to-shake-up-your-design-mockups).
- You might also like [bacon ipsum](https://baconipsum.com/) or [Chuck Norris ipsum](https://vincentloy.github.io/chuck_facts_ipsum/).

### Overview of typography and styling

**What was covered in this section:**

- Why we are using typography, how it's set up, and how you can make changes
- How we'll style our application
- Other styling alternatives available in GatsbyJS

**Resources:**

- [typography.js](https://www.gatsbyjs.org/docs/typography-js/)
- Learn more about [typography](https://kyleamathews.github.io/typography.js/).
- More on [styling](https://www.gatsbyjs.org/tutorial/part-two/#css-in-js) with Gatsby.

### Using React Helmet to add metadata

**What was covered in this section:**

- Installing gatsby-plugin-react-helmet and discussing why we need it.
- Creating out seo.js file and adding some basic content
- Adding our new SEO component to our blog

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

- Install [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) to easily add metadata to your site.

### Creating a new page and linking between pages

**What was covered in this section:**

- Duplicating our index page so we have a dummy page to link to
- Adding a temporary element on each page that we'll use to link pages
- Importing Gatsby's link component and linking our pages

## #SectionTwo

## Querying Data with GraphQL

### Introduction to GraphQL

**What was covered in this section:**

- What GraphQL is and how we can use it in our app.
- Introducing the GraphQL playground.
- Writing our first GraphQL queries.

### Querying data in pages with GraphQL

**What was covered in this section:**

- Import GraphQL and add our query to our index file
- Pass that data into into our component and check out the data in the console
- Update some of our content to use our data

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
- Configuring seo.js with our useStaticQuery hook.
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

## #SectionFour

## Programmatically Creating Pages

### Making Our Post Markdown Files

**What was covered in this section:**

- Installing some plugins to support markdown files
- Looking at the markdown examples
- Adding an additional markdown file

**Resources:**

- Install [gatsby-remark-prismjs prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) to add syntax highlighting
- Install [gatsby-remark-smartypants](https://www.gatsbyjs.org/packages/gatsby-remark-smartypants/) to replace 'dumb' punctuation marks with smart ones.
- Install [gatsby-remark-copy-linked-files](https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/) to copy local markdown files to your public directory.

**Prismjs option config code:**

```
  options: {
    // Class prefix for <pre> tags containing syntax highlighting;
    // defaults to 'language-' (eg <pre class="language-js">).
    // If your site loads Prism into the browser at runtime,
    // (eg for use with libraries like react-live),
    // you may use this to prevent Prism from re-processing syntax.
    // This is an uncommon use-case though;
    // If you're unsure, it's best to use the default value.
    classPrefix: "language-",
    // This is used to allow setting a language for inline code
    // (i.e. single backticks) by creating a separator.
    // This separator is a string and will do no white-space
    // stripping.
    // A suggested value for English speakers is the non-ascii
    // character '›'.
    inlineCodeMarker: null,
    // This lets you set up language aliases.  For example,
    // setting this to '{ sh: "bash" }' will let you use
    // the language "sh" which will highlight using the
    // bash highlighter.
    aliases: {},
    // This toggles the display of line numbers globally alongside the code.
    // To use it, add the following line in src/layouts/index.js
    // right after importing the prism color scheme:
    //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
    // Defaults to false.
    // If you wish to only show line numbers on certain code blocks,
    // leave false and use the {numberLines: true} syntax below
    showLineNumbers: false,
    // If setting this to true, the parser won't handle and highlight inline
    // code used in markdown i.e. single backtick code like `this`.
    noInlineHighlight: false,
    // This adds a new language definition to Prism or extend an already
    // existing language definition. More details on this option can be
    // found under the header "Add new language definition or extend an
    // existing language" below.
    languageExtensions: [
      {
        language: "superscript",
        extend: "javascript",
        definition: {
          superscript_types: /(SuperType)/,
        },
        insertBefore: {
          function: {
            superscript_keywords: /(superif|superelse)/,
          },
        },
      },
    ],
  },
}
```

### Building Our Web App's Post Template

**What was covered in this section:**

- Creating our first template
- Setting up the basic skeleton that will be the blueprint for our posts
- Importing and passing in the components we will need for our template, and
  temporarily adding hardcoded props

### Working with the createPage API in gatsby-node.js

**What was covered in this section:**

- What are the Gatsby Node APIs?
- Implementing the createPage API and adding a GraphQL query
- Mapping over our data to programmatically create pages

**Resources:**

- Read all about [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode) which can be used in gatsby-node.js

### Adding the onCreateNode API and updating our query

**What was covered in this section:**

- Adding the onCreateNode API to gatsby-node.js
- Creating previous and next variables for easier navigation on the client
- Completing createPage and checking out our new programmatically generated pages

### Writing a Page Query to Our Web App Template

**What was covered in this section:**

- Writing a pageQuery in our template to pull in data from our markdown files
- Replacing hard coded content with the results from our data
- Updating our template to display our posts content using innerHTML

**Code for our previous and next links:**

```
<ul>
  <li className="post-navigation">
    {previous && (
      <Link to={previous.fields.slug} rel="prev">
        ← {previous.frontmatter.title}
      </Link>
    )}
  </li>
  <li className="post-navigation">
    {next && (
      <Link to={next.fields.slug} rel="next">
        {next.frontmatter.title} →
      </Link>
    )}
  </li>
</ul>
```

## #SectionFive

## Working with Images in Gatsby

**Before we start**...
Don't forget to

### Importing Files with GraphQL

**What was covered in this section:**

- Importing an image the regular way.
- Installing image plugins and writing a GraphQL query to allow us to access our images.
- Updating our index file to consume the image from our data

**Resources:**

- Install [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/) and [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)

### Using Gatsby Image

**What was covered in this section:**

- Installing Gatsby Image - an image component.
- Why Gatsby Image is an important tool for image optimization.
- Updating our index file to use the Image component.

**Resources:**

- Install [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)

### Adding Images to Our Markdown Files

**What was covered in this section:**

- Adding images to markdown files.
- Installing a plugin that will allow us to successfully display images in markdown files.
- Updating our config and setting some options for our plugin.

**Resources:**

- Install [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/) so that you can display images from markdown files.

### Adding Videos to Our App

**What was covered in this section:**

- Installing the gatsby-remark-responsive-iframe that will wrap any videos we install in a container.
- Creating a new post and markdown file.
- Add an iframe with YouTube link to our file and testing it out in the browser.

**Resources:**

- Install [gatsby-remark-responsive-iframe](https://www.gatsbyjs.org/packages/gatsby-remark-responsive-iframe/) to allow you to embed YouTube videos in your markdown files.

## #SectionSix

## Contenful - Content Infrastructure

## What is Contentful?

**What was covered in this section:**

- What a CMS is and the different types of CMSs
- Pros and cons of traditional and headless CMSs
- How Contentful is different from its competitors

## Creating a Contentful account

**What was covered in this section:**

- Creating a Contentful account
- Adding fields to our content model
- Adding some content to our space

**Resources:**

- [Contentful account creation](https://app.contentful.com)

## Connecting Gatsby to Contentful

**What was covered in this section:**

- Installing the necessary plugins to work with Contentful data with Gatsby
- Adding our Contentful spaceId and accessToken
- Implementing a .env file to make our app more secure

**Resources:**

- The [source plugin](https://www.gatsbyjs.org/packages/gatsby-source-contentful/) we need to communicate with Contentful.
- To render rich text you'll need this [npm package](https://www.npmjs.com/package/@contentful/rich-text-react-renderer).

## Updating gatsby-node with a Contentful query

**What was covered in this section:**

- Visiting the playground to inspect our new query
- Removing content we no longer need in our app
- Making the necessary changes in gatsby-node

## Updating our app to consume posts from Contentful

**What was covered in this section:**

- Updating our index file to render content from Contentful
- Making some minor changes to render most of our fields from Contentful
- Using @contentful/rich-text-types, @contentful/rich-text-react-renderer', and documentToReactComponents to render our rich text

**Resources:**

- [@contentful-rich-text-react-renderer](https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/) docs.

## #SectionSeven

## #Deploying Your App

## Deploying and Hosting

**What was covered in this section:**

- Looking at our deployment options
- Why Netlify?
- Discussing the option to add pathPrefix

## Creating a Netlify Account

**What was covered in this section:**

- Creating your netlify account
- Setting up an empty repository in Github
- Updating the remote to point at your own repo

**Resources:**

- Sign up for a [Netlify Account](https://app.netlify.com/signup)

## Linking to your repository and deploying your web app

**What was covered in this section:**

- Connecting your repository to Netlify
- Deploying your app
- Checking out your production site!

## Updating your app

**What was covered in this section:**

- Editing URLs to point to your production site
- Adding a link from our posts to our home page
- Deploying our changes

## Upping the game with Gatsby Preview

**What was covered in this section:**

- Let's talk about Gatsby Preview
- Creating a trial account
- Witnessing the awesome power of live updates in action!

**Resources:**

- Sign up for a trial [Gatsby Preview](https://www.gatsbyjs.com/dashboard/login) account.
