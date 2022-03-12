---
title: "Install"
permalink: /nx-cms/install/
parent: "Nexus Cms"
nav_order: 1
---

# Install

1. TOC
   {:toc}

Some steps can not be automated, but it's super easy and should take less than 1min. 

<a target="_blank" href="https://app.netlify.com/start/deploy?repository=https://github.com/I-is-as-I-does/Nexus-CMS"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

## I'm an old dog

- Click the `Deploy to Netlify` button and follow steps.
- In the Netlify site settings, setup `Netlify Identity`, `GitHub OAuth` and `Git Gateway`.
- Go to *http://your-site-name.netlify.app/admin* > `Settings` > `Site`, enter your site url and publish.

## Step-by-step please

If you're unfamiliar with GitHub or Netlify, [About Third Parties](#about-third-parties) is there for you.

### Deploy to Netlify

- Click the `Deploy to Netlify` button.  
  You will be redirected to Netlify.

- Next, you'll be asked to connect to GitHub.   
  Create an account if you do not already have one.  
  When prompted, click **Authorize netlify**.

- Once you're back to the Netlify setup page, choose your repository name.  
  Click **Save and Deploy**.

### Configure Netlify

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

### Configure  Nexus CMS

- Connect to Nexus CMS.  
  Go to *http://your-site-name.netlify.app/admin*.  
  Click **Login with Netlify Identity** > **Continue with GitHub**.
  
- Last step: register your site url.  
  On the admin page, navigate to `Settings` > `Site`.
  In the **Url** field enter your newly created netlify domain *http://your-site-name.netlify.app*.  
  Click **Publish** > **Publish now**, and you're done!
  > If you did setup a custom domain, enter your domain url instead.