---
title: "Markdown Syntax"
date: 2020-12-19T00:25:03+05:30
draft: false
Description: "A detailed cheat-sheet for Markdown. From headings to linking of images. We got everything covered."
icon: "ph-battery-charging-vertical-thin"
weight: 6
---

## Headings :grin:

{{< highlight html >}}
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
{{< /highlight >}}

## Paragraphs :wink:

I really like using Markdown.

I think I'll use it to format all of my documents from now on. 

## Line Breaks :fearful:

This is the first line.  
And this is the second line. 


## Emphasis :flushed:
You can add emphasis by making text bold or italic.

### Bold :fearful:
To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

`I just love **bold text**.
I just love __bold text__.`

I just love **bold text**.

I just love __bold text__.

Love**is**bold

### Italic :sleepy:
To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

Italicized text is the *cat's meow*.

Italicized text is the _cat's meow_.

A*cat*meow

### Bold and Italic :sunglasses:
To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

This text is ***really important***.

This text is ___really important___.

This text is __*really important*__.

This text is **_really important_**.

This is really***very***important text.

## Blockquotes :question:
To create a blockquote, add a > in front of a paragraph.

> Dorothy followed her through many of the beautiful rooms in her castle.

## Lists :notes:
You can organize items into ordered and unordered lists.

### Ordered Lists :collision:
To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

1. First item
2. Second item
3. Third item
4. Fourth item 


1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item 

### Unordered Lists :star:

- First item
- Second item
- Third item
- Fourth item 

* First item
* Second item
* Third item
* Fourth item 

+ First item
+ Second item
+ Third item
+ Fourth item 

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item 

## Adding Elements in Lists :facepunch:
To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab, as shown in the following examples.

### Paragraph :muscle:

*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.

### Bloquotes :runner:

*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.

### Code Blocks :love_letter:

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

## Images :snowflake:

1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](/images/our-team/team1.jpg)

3.  Close the file.


## Code :cow:
To denote a word or phrase as code, enclose it in backticks (`).

At the command prompt, type `nano`.

### Escaping Backticks :boar:
If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (``).

``Use `code` in your Markdown file.``

### Code Blocks :monkey:
    <html>
      <head>
      </head>
    </html>


## Horizontal Rules :chicken:
To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

***

---

_________________

## Links :fish:
To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

### Adding Titles :whale:
You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL.

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

### URLs and Email Addresses :bouquet:
To quickly turn a URL or email address into a link, enclose it in angle brackets.

<https://www.markdownguide.org>
<fake@example.com>


## Images :first_quarter_moon:
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

![Philadelphia's Magic Gardens. This place was so cool!](/images/our-team/team1.jpg "Philadelphia's Magic Gardens")

### Linking Images :rose:
To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

[![An old rock in the desert](/images/our-team/team1.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)


| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text | 