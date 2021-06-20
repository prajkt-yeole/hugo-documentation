---
Title: Manage Content
Description: "Go through each section in the app to learn how you can add content. Template has various methods to update content."
icon: "ph-translate-thin"
weight: 3
---

## Add Content :four_leaf_clover:
You can write content in markdown as well as with HTML tags. All the cards you see on home page under the heading documentation are separated pages. 

### Pages :school_satchel:
You can create a new card either with cli or manually. 

You can create a new page with - 

{{< highlight go >}}
hugo new page getting-started/index.md
{{< /highlight >}}

Once the new page is created you will find below contents in the frontmatter of the md file. 

{{< highlight yml >}}
title: ""           // Page title
date:               // Auto generated
draft: true         // If you need to keep it draft
Description: ""     // Will show up on home page cards
icon: ""            // Refer Phosphor Icons 
weight:             // Sequencing of the cards
pageClass: ""       // (Optional) if you want to add any page level class
{{< /highlight >}}

Date will be auto-generated with your system time.

Incase you miss the `icon` field, a default cog icon will appear on the cards which can be changed from `category-cards-home.md`.

## Table of Contents :christmas_tree:
Table of contents will be auto generated in the markdown file. It will have child nodes up to 1 level only.  

Use following syntax - 
{{< highlight html >}}
## Primary Heading
### Child Heading
### Child Heading 2
### Child Heading 3

## Primary Heading 2
{{< /highlight >}}

the above code will have output as - 

{{< highlight html >}}
├── Primary Heading 
    ├── Child Heading
    ├── Child Heading 2
    ├── Child Heading 3
├── Primary Heading 2
{{< /highlight >}}

Concluding, you have to use `##` for main heading and `###` for child heading.

## Markdown Syntax :alarm_clock:
You can use Markdown syntax along with HTML tags in md file. You can refer to [markdown cheatsheet here](/markdown-syntax).

## Syntax Highlighter :balloon:
HUGO supports ~193 languages highlights. You can check the entire list of languages from [here](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages).

View entire HUGO Syntax Highlight documentation form [ here](https://gohugo.io/content-management/syntax-highlighting/).

## Emoji Support :soccer:
Emoji runs a passed string through the Emoji emoticons processor.

[Full Cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/).

Visit [Emoji Page](/emoji-cheat-sheet) for all emojis in our app.

## Icons :gem:
Xenon Docs uses [Phosphor Icons](https://phosphoricons.com/) . It has 4,098 icons with 5 font weights. 

Refer their official documentation for all necessary codes required.

Visit [Phosphor Icons Page](/phosphor-icons) for all icons in our app.

## FAQs :ribbon:
The frequently asked questions data on Home page are generated form JSON which can be found in `/data` folder.

Currently we use 2 keys as per our requirement but you can modify as per your needs.

The structure of `FAQs` can be found in `/partials` folder named `faqs-home.html`.

{{< highlight json >}}
[
    {
        "question": "",
        "answer": ""
    }
]
{{< /highlight >}}


## Team :ramen:
Our team section on home page also gets its data from JSOn file under `/data` folder. 

{{< highlight json >}}
[
    {
        "name": "",
        "designation": "",
        "imageName": ""
    }
]
{{< /highlight >}}

Currently we are capturing 3 values, but you can modify as per your needs.

In the current structure our team images are placed in `/static/images/out-team`, you can change but also keep in mind to update it in `our-team.html` file.

Incase you don't put the  `imageName` field, a default image will appear.