---
title: "About Third Parties"
parent: "Nexus Cms"
nav_order: 5
---

# About Third Parties

1. TOC
   {:toc}

## GitHub

> Git is a free and open source version control system.  
> It maintains a history of all changes made to a set a files, usually called a repository.

GitHub is a repository hosting service that provides a web-based graphical interface.  
Their free tier is extremely generous with unlimited public and private repositories.

This is where your source files will be stored.

### Storage limitations

- Your repository should not exceed 1GB in size.  
- Each file must not exceed 25MB; this limit is stretched to 50MB if you're using git commands.  
- Since Nexus CMS generates a website, a 2MB limit is implemented for video and audio files, 500KB for images.
    
You are still free to store your media files on another server or platform, as long as you can provide a working direct access url.  
Nexus apps also support YouTube, Vimeo and Soundcloud urls.

## Netlify

Netlify is a web hosting and automation platform.  
Their free tier is perfectly fine for a Nexus CMS website.

### How it works

- Netlify connects to a repository containing source code,
- runs a build process to pre-render files each time content gets updated,
- then distributes the optimized files on a Content Delivery Network.

> A Content Delivery Network is a geographically distributed network of proxy servers.  
> Your website will be served from the closest server to each visitor.  
     
### How it meshes with Nexus 

Since the whole principle of Nexus is to connect your content to other live, self-hosted Nexus instances, the Nexus part of the page is still built on-the-fly, and not pre-rendered.  

The focus of Nexus CMS is more on the *self-hosted* matter. This solution offers a simple, seamless way to create, edit and auto-deploy Nexus instances.  

For efficiency, Nexus apps that take care of this on-the-fly rendering are also hosted on a Content Delivery Network.

## Netlify CMS

Netlify CMS is a Git-based open source content management system.  
It handles the core functionalities of the `/admin` section of your website.  

Nexus CMS pre-configures and augments Netlify CMS to suit the project requirements.  
Live previews are custom, as well as several widgets.  
The theme is also tweaked a little bit.

## 11ty

Eleventy, or 11ty, is an open source static site generator.  

> It transforms templates into static files that, once built, will not require server-side processing.  
> It allows for faster, safer websites, that can be hosted anywhere.

11ty is the part of Nexus CMS responsible for building your html pages and Nexus .json files.  
Each time you will save a change, either to settings, a Nexus instance or a page, a new build will be triggered.

### Build time

On average, an 11ty build running on a Netlify free plan takes about 2 minutes.  
Nexus CMS has been designed for a faster process: it should only take 15 to 20 seconds.  
If you have a lot of data though, it might be a bit longer.