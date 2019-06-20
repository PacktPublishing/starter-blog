# Starter Blog
___Created by Rachelle Rathbone___.

## Section 1: Getting Started with Gatsby JS

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

### Overview of typography and styling
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
* Installing gatsby-plugin-react-helmet and discussing why we need it.
* Creating out seo.js file and adding some basic content
* Adding our new SEO component to our blog

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
* Duplicating our index page so we have a dummy page to link to
* Adding a temporary element on each page that we'll use to link pages
* Importing Gatsby's link component and linking our pages
