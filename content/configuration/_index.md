---
Title: Configuration
Description: "Know in detail the configuration of the website. Read about basic elements, color theme options and dark mode."
icon: "ph-gear-six-thin"
weight: 2
---

## Introduction :laughing:
`config.yml` stores site essential data. You can find this file at the root of your project. 

{{< alert `Remember to restart your server once you make any changes in the config file` `warning`>}}


## Relative URLs :anguished:
If you are planning to deploy your website which is not at the `root` of your server then you will have to set `baseURL` in the `config.yml` file.

For example, your site url is going to be `https://example.com/docs`, then you need to update your baseURL -

{{< highlight yml >}}
baseURL: "/docs"
{{< /highlight >}}


## Color Themes :purple_heart: :yellow_heart: :blue_heart:
There are total of 6 color theme options present in Xenon Docs. 
* Kashmir Blue `kashmir-blue-theme`
* Cashmere `cashmere-theme`
* Terra-cotta `terra-cotta-theme`
* Biloba-flower `biloba-flower-theme`
* Smalt-blue `smalt-blue-theme`

You can update the `color_theme` variable in `config.yml` file.

{{< highlight yml >}}
params :
    color_theme: ""
{{< /highlight >}}

{{< alert `If you keep the color_theme variable empty then you will have the default theme color.` `primary`>}}

## Dark Mode :skull:
Dark mode is available throughout the app. On the top right you will se Sun icon from where you can toggle dark mode. Dark mode will persist through all your pages.

## Banner :baby_chick:
The title and sub-text on the banner pages comes form the `config.yml` file. The `title` variables is used throughout the app. 

{{< highlight yml >}}
title : "Xenon"
params :
    siteDescription: ""
{{< /highlight >}}

If you wish to edit it you can edit `banner-home.html` file present in `/partials` folder.

Similarly for inner pages we have `banner-inner.html` file present in `/partials` folder.

## Footer :crocodile:
Footer text can be changed from `footer.html` file present in `/partials`. Copyright year will be automatically generated.

## Google Analytics :cactus:
Since Google Analytics has launched their newer version with lot new features, the new GA tag is not supported with inbuilt google analytics template. 

Hence we have created a `google-analytics.html` file in partials where you can add your GA code.

## Favicon :earth_asia:
Update your `favicon.ico` file in `/static` folder and then build your project. It will applied to all the pages in the project.