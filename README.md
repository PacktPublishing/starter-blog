# Starter Blog
___Created by Rachelle Rathbone___.

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
