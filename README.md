# Starter Blog
___Created by Rachelle Rathbone___.

## #SectionTwo
## Querying Data with GraphQL

### Introduction to GraphQL
**What was covered in this section:**
* What GraphQL is and how we can use it in our app.
* Introducing the GraphQL playground.
* Writing our first GraphQL queries.

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
