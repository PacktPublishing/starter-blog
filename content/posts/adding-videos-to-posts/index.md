---
title: Adding Videos to Your Gatsby Apps
subtitle: How to Efficiently Add Videos to Your Posts
description: Easily Add YouTube Videos to Your Markdown Files
date: 2019-07-11
---

If you've built a blog using Gatsby and are generating your posts with the use of markdown files, there may come a time when you want to add a video. Thanks to Gatsby's extensive plugin library, there's a plugin to help you out with your video integration.

The steps are simple:
1. Install `gatsby-remark-responsive-iframe`.

2. Update gatsby-config.js:
```
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-responsive-iframe`],
    },
  },
]
```

3. Select your YouTube video. I'll be using a presenation video created by [Packt Publishing](https://www.packtpub.com/). If you've never heard of them you should totally check them out.

4. Add the following to your markdown file in your location of choice, replacing the url of course:
```
<iframe src="https://www.youtube.com/embed/NrOzIRHLvCU" width="600" height="400"></iframe>
```

5. Check out the video in your app. Voila! Easy stuff.

Don't forget to check out the [Gatsby Plugin Library](https://www.gatsbyjs.org/plugins/) to see what other plugins are out there to make your life easy.



