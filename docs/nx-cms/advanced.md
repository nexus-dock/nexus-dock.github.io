---
title: "Advanced"
permalink: /nx-cms/advanced/
parent: "Nexus Cms"
nav_order: 4
---
# Advanced

1. TOC {:toc}

## Switch to Private

By default the created repository will be public.  
You can change it to private, but will need to regenerate your Netlify token.  
- Go to your Netlify site dashboard,
- navigate to `Site settings` > `Identity` > `Services` > `Git Gateway`,
- click **Edit settings** and then **Generate access token in GitHub**.

## Run Locally

### Setup 

- Clone the repository locally.  
  With Github CLI: `$ gh repo clone I-is-as-I-does/Nexus-CMS`.
- Install: `$ npm install`.
- In `admin/config.yml`: add `local_backend: true`.   
- Create a `_site/` folder.  

### Serve
  
- Launch dev server: `$ npm run serve`.  
- For the CMS to work, open a *second* terminal and run: `$ npx netlify-cms-proxy-server`. 
- Go to `localhost:PORT` for website and `localhost:PORT/admin` for admin (PORT is usually 8080).  

## Host anywhere

If you use Nexus CMS locally, you're not bound to Netlify hosting services.   
Run `$ npm run build`.  
All built files are in the `_site/` folder.  
Drop the content of this folder anywhere you want.  

If you plan to host the built files on an Apache server: required `.htaccess` files are already prepared.  
Open `.eleventy.js` and simply uncomment the two indicated lines at the beginning of the config.  

## Make it yours

You can augment your [11ty](https://github.com/11ty/eleventy/) site; add custom widgets to [Netlify CMS](https://github.com/netlify/netlify-cms); build your own [Nexus](https://github.com/I-is-as-I-does/Nexus) app.

For a Nexus reader app to be compatible with the Nexus CMS live preview feature, it must:  
- listen to change events on the `#Nexus` element 
- then retrieve and validate the content of `data-srcdoc`.