---
title: "Nexus IO Editor"
permalink: /docs/nx-io-editor/
---
## IO Editor

### Open the Editor

On any page using the default app, Nexus IO, you can **load a Nexus Editor** by adding `?new` to the address bar.

> If the url already contains an `?`, type `&new` instead.

<img class="bordered" src="https://nexus-dock.github.io/img/nx-new.gif" alt="new Nexus">

You can use our <a href="/demo/nx-io/?new" target="_blank">demo instance</a> if you wish.  
But the recommended way would be to use your own instance, if you have one already set up:

*   with the Apache starter kit: `http://your-website.xyz/nexus/?new`
*   with the GitHub starter kit: `https://your-github-handle.github.io/nexus/?new`

You can also load the Editor by typing `edit` instead of `new`.

<img class="bordered" src="https://nexus-dock.github.io/img/nx-edit.gif" alt="new Nexus">

It will load the Nexus file specified in the `data-src` attribute of the [snippet](/docs/snippet/).  
If a previously modified version of this file has been cached, this modified version will be displayed.

> Please note nothing will be actually edited until you upload the new file on your server.

#### Advanced users

You can also add `&log` in the address bar.  
If something goes wrong – like external request failures, some information will be logged in the developer console.

### Fill in the Form

Once the editor opened, you can now **fill in the form**.

Indications between brackets are hints at the field requirement.

> `[3-30]` for example indicates min. and max. characters.  
> `[http]` states that the url must be a valid `http` url.

A valid field is marked with a `✓`, an invalid one with a `✗`.  
**Make sure all your fields are valid**, or your Nexus might not load at all.

> When you enter a Nexus url in a `linked threads` field, the app will check if it loads correctly.  
> If the field gets marked as invalid, there’s probably something wrong:  
> either the link is broken, the distant Nexus data is invalid, or the request was refused.

Switch to the **Preview Mode** by clicking on the eye icon.  
Revert to the editor with the pen icon.

Back and forward arrows lets you undo / redo your actions.

Circling arrow will revert data to its original state.  
File icon create a new Nexus.  
Folder icon allows you to load a Nexus .json file from your device.  
Save icon **temporarily** store the current state in your **browser cache**.

> IMPORTANT  
> If you configured your browser to prevent the use of local storage, there is no backup.  
> If you clear up your browser cache, the data will be gone.  
> The cache is also domain dependent. If you edit your data from another website, the saved data will not be available.

Downward arrow will generate a .json file and **download it** on your device.  
This is the safe and sure way to **save** your Nexus data.

### Handle Media

If you wish to share media like images, MP3s or videos, you will need to 
- **upload** those files on your server,   
- or use **external providers**.  
  Currently supported providers are Youtube, Vimeo and SoundCloud.

The form will try to guess which type of media url you’re sharing and automatically set the media `Type` field.  
Just make sure it got it right!

If you go the self-host route, please keep in mind that **your media files should be compressed for the web**.  
Videos and MP3s should be fine below 2 or 3MB, and images below 500KB.

### Publish

When you’re done editing your Nexus and all fields are valid, click the downward arrow to download your .json file.

> It is very highly recommended that the size of this file does not exceed 2MB.

Now you will need to **upload it on a server** – alongside media files if any.

*   If you use **GitHub Pages**, you can do so by using Git, or through the GitHub website.
*   If you have a web host, you can use an **FTP file manager** like FileZilla.  
    Many web hosts also offer a web-based FTP file manager.
*   If you have a **CMS** installed, you may also be able to use its **backend** to upload your files.

If you use one the starter kits: **replace** the `nexus.json` file in the `source/` folder with your new one.  
Otherwise, keep in mind to stick with the same .json **filename and location**, so that your Nexus link doesn’t get broken.

IMPORTANT  
The host **must allow for external requests** – otherwise other Nexus instances won’t be able to display your Nexus.

*   If you use GitHub Pages, that’s already the case by default.
*   If you use the Apache starter kit, it’s being taken care of by the `.htaccess file`.

To display your Nexus, check the [Display](/pages/display/) documentation.  
If you’re using one of the starter kits, **everything is already set up** in the `index.html` file.

Now go announce the world your Nexus exists!

> It sure would be nice to have a Nexus registry somewhere.  
> If you feel like building it, check out the [Contribute](/pages/contribute/) section!

To **update your Nexus**, rince and repeat:

*   visit the page displaying your Nexus;
*   type `?edit` in the address bar;
*   download the .json when you’re done;
*   publish it on your server alongside media if any.

### Clear Saves

The `?clear` keyword used to [clear cache](/pages/display#clear-cache) will **not** erase the editor local saves.  
To erase editor saves: in your browser address bar, add `?erase` to the current url.  
If a query string is already present, use `&erase` instead.