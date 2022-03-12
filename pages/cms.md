---
layout: base
title: "Nexus Cms"
permalink: /nx-cms/
---

- [Install](#install)
  - [I'm an old dog](#im-an-old-dog)
  - [Step-by-step please](#step-by-step-please)
- [Nexus Options](#nexus-options)
  - [Reader apps](#reader-apps)
  - [Themes](#themes)
  - [Languages](#languages)
- [Tips](#tips)
  - [Live Preview](#live-preview)
  - [Favicons](#favicons)
  - [Urls](#urls)
  - [Markdown](#markdown)
  - [Navigation](#navigation)
- [Advanced](#advanced)
  - [Switch to Private](#switch-to-private)
  - [Run Locally](#run-locally)
    - [Setup](#setup)
    - [Serve](#serve)
  - [Host anywhere](#host-anywhere)
  - [Make it yours](#make-it-yours)
- [About Third Parties](#about-third-parties)
  - [GitHub](#github)
    - [Storage limitations](#storage-limitations)
  - [Netlify](#netlify)
    - [How it works](#how-it-works)
    - [How it meshes with Nexus](#how-it-meshes-with-nexus)
  - [Netlify CMS](#netlify-cms)
  - [11ty](#11ty)
    - [Build time](#build-time)
- [Repository](#repository)

# Nexus Cms

A free, 1 minute setup solution to create and auto-deploy Nexus instances... and static pages!  
Under the hood, Nexus CMS makes use of 11ty to generate files, and Netlify CMS for a user-friendly backend.  

## Install

Some steps can not be automated, but it's super easy and should take less than 1min. 

<a target="_blank" href="https://app.netlify.com/start/deploy?repository=https://github.com/I-is-as-I-does/Nexus-CMS"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

### I'm an old dog

- Click the `Deploy to Netlify` button and follow steps.
- In the Netlify site settings, setup `Netlify Identity`, `GitHub OAuth` and `Git Gateway`.
- Go to *http://your-site-name.netlify.app/admin* > `Settings` > `Site`, enter your site url and publish.

### Step-by-step please

If you're unfamiliar with GitHub or Netlify, [About Third Parties](#about-third-parties) is there for you.

- Click the `Deploy to Netlify` button.  
  You will be redirected to Netlify.

- Next, you'll be asked to connect to GitHub.   
  Create an account if you do not already have one.  
  When prompted, click **Authorize netlify**.

- Once you're back to the Netlify setup page, choose your repository name.  
  Click **Save and Deploy**.

- You should now see your Netlify site dashboard.  
  Go to `Site settings`. 

- In the `General` tab: change your site name (unless you fancy the random one!).  
  Your Nexus website will be accessible at *http://your-site-name.netlify.app*.
  > You can also set up a custom domain if you wish to, going to the the `Domain management` tab.

- Now, let's activate authentication.  
  In the `Identity` tab: click **Enable Identity**, then:
  - in the `Registration preferences` section: click **Edit settings** and select **Invite only**.
  - in the `External providers` section: click **Add provider** > **GitHub** > **Use default configuration**.
  - finally scroll down to the `Service` > `Git Gateway` section, and click **Enable Git Gateway**.	
  
- Connect to Nexus CMS.  
  Go to *http://your-site-name.netlify.app/admin*.  
  Click **Login with Netlify Identity** > **Continue with GitHub**.
  
- Last step: register your site url.  
  On the admin page, navigate to `Settings` > `Site`.
  In the **Url** field enter your newly created netlify domain *http://your-site-name.netlify.app*.  
  Click **Publish** > **Publish now**, and you're done!
  > If you did setup a custom domain, enter your domain url instead.

## Nexus Options

`Settings` > `Nexus instances`  
Currently available apps, themes and languages.  
You're very much welcome to [contribute](https://github.com/I-is-as-I-does/Nexus/blob/main/CONTRIBUTING.md)!

### Reader apps

- https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@^1.1.4/dist/js/NxFolio.js
- https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@^1.1.4/dist/js/NxIO.js

### Themes

For NxFolio
- (default) https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@^1.1.4/dist/css/NxFolio.min.css

For NxIO
- (default) https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@^1.1.4/dist/css/NxIO.min.css
- https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@^1.1.4/dist/css/NxIO-alt.min.css

### Languages

It's very optional, as currently only used by NxIO editor app.

- en
- fr

## Tips

### Live Preview

For each collections, `Settings`, `Nexus instances` and `Static pages`, you'll have a **form** a the left side, and a **live preview** on the right.  

If you've just published some changes, then reloaded or left the `/admin` page, the `Settings` > `Site` preview might not be immediately up-to-date.   
In which case, you can simply wait a dozen of seconds, then click the eye icon to toggle off then on again the preview panel.
> You can find more info on the build process in the [11ty](#11ty) section.

If a Nexus instance preview is displaying `– /–`: 
- either the site url your entered if `Settings` > `Site` is wrong;
- or the current instance data is invalid. 
  Check the form to see if all required fields are properly filled out.  
  > Hints of the requirements are displayed between brackets `[]`. 

Please note that if "official" Nexus apps do support Nexus CMS live preview feature, that may not be the case if you use a custom Nexus app.  
> If you plan to build a custom app, check [Make it yours](#make-it-yours).

### Favicons

If you wish to change your website favicons, you can do in `Settings` > `Site`.  
Just make sure the new files names and dimensions are exactly as specified in the form.  

### Urls

At the top of the preview pane, you'll find the previewed page url.

Nexus pages urls: *http://your-site-name.netlify.app/nexus/filename*  
Static pages urls: *http://your-site-name.netlify.app/pages/filename*  

Default Nexus page (as specified in `Settings` > `Nexus Instances`):  
*http://your-site-name.netlify.app/nexus*  
Default Static page (as specified in `Settings` > `Static pages`):  
*http://your-site-name.netlify.app/pages*  

*http://your-site-name.netlify.app* will display either the default Nexus page, or the default Static page, depending on what you specified in `Settings` > `Site`.

### Markdown

Static pages content can be written either in plain Markdown, or using the Rich Text editor.  
You can toggle between the two modes on the content widget.  

> Markdown is a simple and easy-to-learn markup language used to format content.  
> Cheat sheet: [markdownguide.org/cheat-sheet](https://www.markdownguide.org/cheat-sheet/)

### Navigation

You can easily create a menu listing your Static pages or Nexus instances:

- edit or create a new Static page;
- on the Content widget, click the `+` icon, then `Collection index`;
- select either **Nexus instances** or **Static pages** and check the result in the live preview. 

To have both lists, simply add another `Collection index` block.  

For a more custom menu, or to add a single link, you can use the `Nexus instance link` and `Static page link` blocks.

## Advanced

### Switch to Private

By default the created repository will be public.  
You can change it to private, but will need to regenerate your Netlify token.  
- Go to your Netlify site dashboard,
- navigate to `Site settings` > `Identity` > `Services` > `Git Gateway`,
- click **Edit settings** and then **Generate access token in GitHub**.

### Run Locally

#### Setup 

- Clone the repository locally.  
  With Github CLI: `$ gh repo clone I-is-as-I-does/Nexus-CMS`.
- Install: `$ npm install`.
- In `admin/config.yml`: add `local_backend: true`.   
- Create a `_site/` folder.  

#### Serve
  
- Launch dev server: `$ npm run serve`.  
- For the CMS to work, open a *second* terminal and run: `$ npx netlify-cms-proxy-server`. 
- Go to `localhost:PORT` for website and `localhost:PORT/admin` for admin (PORT is usually 8080).  

### Host anywhere

If you use Nexus CMS locally, you're not bound to Netlify hosting services.   
Run `$ npm run build`.  
All built files are in the `_site/` folder.  
Drop the content of this folder anywhere you want.  

If you plan to host the built files on an Apache server: required `.htaccess` files are already prepared.  
Open `.eleventy.js` and simply uncomment the two indicated lines at the beginning of the config.  

### Make it yours

You can augment your [11ty](https://github.com/11ty/eleventy/) site; add custom widgets to [Netlify CMS](https://github.com/netlify/netlify-cms); build your own [Nexus](https://github.com/I-is-as-I-does/Nexus) app.

For a Nexus reader app to be compatible with the Nexus CMS live preview feature, it must:  
- listen to change events on the `#Nexus` element 
- then retrieve and validate the content of `data-srcdoc`.

## About Third Parties

### GitHub

> Git is a free and open source version control system.  
> It maintains a history of all changes made to a set a files, usually called a repository.

GitHub is a **repository hosting service** that provides a web-based graphical interface.  
Their free tier is extremely generous with unlimited public and private repositories.

This is where your source files will be stored.

#### Storage limitations

- Your repository should not exceed **1GB** in size.  
- Each file must not exceed 25MB; this limit is stretched to 50MB if you're using git commands.  
- Since Nexus CMS generates a website, a 2MB limit is implemented for video and audio files, 500KB for images.
    
You are still free to store your media files on another server or platform, as long as you can provide a working direct access url.  
Nexus apps also support YouTube, Vimeo and Soundcloud urls.

### Netlify

Netlify is a **web hosting** and **automation** platform.  
Their free tier is perfectly fine for a Nexus CMS website.

#### How it works

- Netlify connects to a repository containing source code,
- runs a build process to pre-render files each time content gets updated,
- then distributes the optimized files on a Content Delivery Network.

> A Content Delivery Network is a geographically distributed network of proxy servers.  
> Your website will be served from the closest server to each visitor.  
     
#### How it meshes with Nexus 

Since the whole principle of Nexus is to connect your content to other live, self-hosted Nexus instances, the Nexus part of the page is still built on-the-fly, and not pre-rendered.  

The focus of Nexus CMS is more on the *self-hosted* matter. This solution offers a simple, seamless way to create, edit and **auto-deploy** Nexus instances.  

For efficiency, Nexus apps that take care of this on-the-fly rendering are also hosted on a Content Delivery Network.

### Netlify CMS

Netlify CMS is a Git-based open source content management system.  
It handles the core functionalities of the `/admin` section of your website.  

Nexus CMS pre-configures and augments Netlify CMS to suit the project requirements.  
Live previews are custom, as well as several widgets.  
The theme is also tweaked a little bit.

### 11ty

Eleventy, or 11ty, is an open source static site generator.  

> It transforms templates into static files that, once built, will not require server-side processing.  
> It allows for faster, safer websites, that can be hosted anywhere.

11ty is the part of Nexus CMS responsible for building your html pages and Nexus .json files.  
Each time you will save a change, either to settings, a Nexus instance or a page, a new build will be triggered.

#### Build time

On average, an 11ty build running on a Netlify free plan takes about 2 minutes.  
Nexus CMS has been designed for a faster process: it should only take 15 to 20 seconds.  
If you have a lot of data though, it might be a bit longer.

## Repository

[github.com/I-is-as-I-does/Nexus-CMS](https://github.com/I-is-as-I-does/Nexus-CMS)  
