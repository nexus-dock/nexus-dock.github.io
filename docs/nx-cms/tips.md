---
title: "Tips"
parent: "Nexus Cms"
nav_order: 3
---

# Tips

1. TOC
   {:toc}

## Live Preview

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

## Favicons

If you wish to change your website favicons, you can do in `Settings` > `Site`.  
Just make sure the new files names and dimensions are exactly as specified in the form.  

## Urls

At the top of the preview pane, you'll find the previewed page url.

Nexus pages urls: *http://your-site-name.netlify.app/nexus/filename*  
Static pages urls: *http://your-site-name.netlify.app/pages/filename*  

Default Nexus page (as specified in `Settings` > `Nexus Instances`):  
*http://your-site-name.netlify.app/nexus*  
Default Static page (as specified in `Settings` > `Static pages`):  
*http://your-site-name.netlify.app/pages*  

*http://your-site-name.netlify.app* will display either the default Nexus page, or the default Static page, depending on what you specified in `Settings` > `Site`.

## Markdown

Static pages content can be written either in plain Markdown, or using the Rich Text editor.  
You can toggle between the two modes on the content widget.  

> Markdown is a simple and easy-to-learn markup language used to format content.  
> Cheat sheet: [markdownguide.org/cheat-sheet](https://www.markdownguide.org/cheat-sheet/)

## Navigation

You can easily create a menu listing your Static pages or Nexus instances:

- edit or create a new Static page;
- on the Content widget, click the `+` icon, then `Collection index`;
- select either **Nexus instances** or **Static pages** and check the result in the live preview. 

To have both lists, simply add another `Collection index` block.  

For a more custom menu, or to add a single link, you can use the `Nexus instance link` and `Static page link` blocks.