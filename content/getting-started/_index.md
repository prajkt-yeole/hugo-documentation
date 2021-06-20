---
Title: Getting Started
Description: "Know more about xenon docs and hugo and the installation process of HUGO and the directory structures."
icon: "ph-chart-line-up-thin"
weight: 1
---

## What is Xenon Docs ?  :page_facing_up:
Xenon Docs is a HUGO based documentation template. You can create your own documentation and deploy it anywhere you want Netlify, AWS, GitHub, GitLab, DigitalOcean.

## What is HUGO ? :jack_o_lantern:
Hugo is a fast and modern static site generator written in Go, and designed to make website creation fun again.
Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. Unlike systems that dynamically build a page with each visitor request, Hugo builds pages when you create or update your content. Since websites are viewed far more often than they are edited, Hugo is designed to provide an optimal viewing experience for your website’s end users and an ideal writing experience for website authors.

## Install HUGO  :rocket:
Install Hugo on macOS, Windows, Linux, OpenBSD, FreeBSD, and on any machine where the Go compiler tool chain can run.

For detailed documentation refer to <a href="https://gohugo.io/getting-started/installing/" target="_blank"> HUGO install docs</a>



### Windows OS  :truck:
1. Go to the [Hugo Releases](https://github.com/gohugoio/hugo/releases) page.
2. The latest release is announced on top. Scroll to the bottom of the release announcement to see the downloads. They’re all ZIP files.
3. Find the Windows files near the bottom (they’re in alphabetical order, so Windows is last) – download either the 32-bit or 64-bit file depending on whether you have 32-bit or 64-bit Windows. (If you don’t know, see here.)
4. Move the ZIP file into your C:\Hugo\bin folder.
5. Double-click on the ZIP file and extract its contents. Be sure to extract the contents into the same C:\Hugo\bin folder – Windows will do this by default unless you tell it to extract somewhere else.
6. You should now have three new files: The hugo executable (hugo.exe), LICENSE, and README.md.

{{< alert `Remember to used extended version as we are using SCSS in our template` `primary`>}}

#### Windows 10 Users  :fries:

- Right click on the Start button.
- Click on System.
- Click on Advanced System Settings on the left.
- Click on the Environment Variables… button on the bottom.
- In the User variables section, find the row that starts with PATH (PATH will be all caps).
- Double-click on PATH.
- Click the New… button.
- Type in the folder where hugo.exe was extracted, which is C:\Hugo\bin if you went by the instructions above. The PATH entry should be the folder where Hugo lives and not the binary. Press - Enter when you’re done typing.
- Click OK at every window to exit.

### Mac OS  :womans_hat:
If you are on macOS and using Homebrew, you can install Hugo with the following one-liner:
{{< highlight javascript >}}brew install hugo{{< /highlight >}}

### Linux OS  :fishing_pole_and_fish:
If you are using Homebrew on Linux, you can install Hugo with the following one-liner:
{{< highlight javascript >}}brew install hugo{{< /highlight >}}

{{< alert `Run "hugo version" command to check if hugo is properly installed or not. ` `warning`>}}

## Install Xenon Docs  :beers:
Once downloaded from themeforest you should be able to extract the HUGO template any where and start the development server.

{{< alert `C:\Hugo\Sites` `info`>}}


### Start Devlopment Server :tomato:
Run the following command to start the development server -
{{< highlight javascript >}}hugo server{{< /highlight >}}

You can access `http://localhost:1313` on the browser and you can start seeing the Xenon Docs home page.

### Directory Structure  :handbag:
{{< highlight html >}}
.
├── archetypes
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes
{{< /highlight >}}

## Credits :gift_heart:

* Phosphor Icons
* Google Fonts
* Bootstrap 
