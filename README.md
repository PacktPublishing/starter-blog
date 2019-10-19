# Starter Blog
___Created by Rachelle Rathbone___.

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
