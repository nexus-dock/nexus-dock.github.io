---
title: "Nexus Snippet"
permalink: /docs/snippet/
---

## Snippet

### Simple

#### Example

```html
<div id="Nexus" data-src="https://website.xyz/source/nexus.json#thread-id"></div>
<script src="https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@latest/dist/js/NxIO.js"></script>
```

#### Container

##### `div id="Nexus"`

This element will contain the app.  

##### `data-src`

This attribute is required.  
Specify here the url of the Nexus **json file** you wish to display.  
Add `#some-thread-id` to target a specific thread.

> If the page containing the snippet is on the same server as the  Nexus file, it can be a relative path;   
> for example `source/nexus.json#first-thread`.  
> Otherwise, it must be an absolute path starting with `http://` (or `https://`).

#### Script

This is the link loading the app.  
By default, it loads the latest build of the default app, hosted on a CDN.

> If you prefer to load another Nexus app, another build, or to load it from your own server, feel free to change the script `src`.

- Nexus Folio: `https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@latest/dist/js/NxFolio.js`
- Nexus IO: `https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@latest/dist/js/NxIO.js`

### Advanced

#### Example

```html
<div id="Nexus" 
    data-src="https://website.xyz/source/nexus.json" 
    data-id="thread-id"
    data-style="https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@latest/dist/css/NxIO-alt.min.css" 
    data-lang="fr" 
    data-srcdoc="{...}" 
 ></div>
<script src="https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@latest/dist/js/NxIO.js"></script>
```

#### Optional attributes

##### `data-id`  

You can specify here a **thread id**.   
> The default method is to add `#thread-id` to the `data-src` url. 

##### `data-style`

Specify here the **url of the theme** you wish to use.  
If you’re fine with the default theme, you can omit this parameter.

> If the page containing the snippet is on the same server as the theme file, it can be a relative path;   
> for example: `assets/theme.css`.  
> Otherwise, it must be an absolute path starting with `http://` (or `https://`).

##### `data-lang`

Specify here the **default language** the app should use.  
If omitted, the app will look for the page’s language, or fallback to English.

> Note that if another language is picked through the interface, this choice will be cached and preferred over the default setting.

Currently **supported languages**: `en`, `fr`.  
Additional translations are much welcomed!

##### `data-srcdoc`  

Instead of specifying an url in `data-src`, you can also pass **raw json data** using this attribute.  
If you change the data and wish to update what's being displayed, trigger a `change` event on the `#Nexus` element.

```js
var nxElm = document.querySelector("#Nexus")
nxElm.dataset.srcdoc = JSON.stringify({
    "author": {...},
    "threads": [...]
});
nxElm.dispatchEvent(new CustomEvent('change'));
```
