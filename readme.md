# Hi!

![temp screenshot](https://raw.github.com/jlord/sheetsee-tool-lending/gh-pages/lending-ss.png)

### A Tool Lending Library Site

A webiste and spreadsheet set up to make lending tools to friends or neighbors easier.

Currently while I'm still developing/desinging the layout, I'm using [sheetsee-cache](http://www.github.com/jlord/sheetsee-cache), which enables me to cache the data so that I don't have to visit google every refresh and can develop offline. When I'm happy with it, I'll delete a couple files and add 3 lines to the index.html and taadaaa it will become the normal sheetsee.js client-side fork-n-go-able version.

So to set it up now, clone this repo, cd into the folder, `npm install` and then `npm sever.js`.

When I turn it over, the fork-n-go process goes like this (italicized for now to emphasize that I haven't switched it over yet):

#### Fork -n- Go!

_In a bit I'll do some more refining (and documentation) - but here's a fun fact:_

_This repo only has a **gh-pages** branch, which means as soon as you **fork** it, you have a hosted and live version of it yourself!_

_Next, create a spreadsheet with the same column headers as [the original](https://docs.google.com/spreadsheet/ccc?key=0AvFUWxii39gXdGxhcjhzYzlBX2pyVFZZU2VjZ3BHZ3c#gid=0)._

_Click on the `index.html` file, click edit and change **line (TBD)**. Replace the existing spreadsheet URL key with your spreadsheet's key. You'll find that by clicking (in Google Spreadsheets) File > Publish to the Web > Start Publishing, it will then display the key in a window. ![get key](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)_

_Commit those changes and **LIKE WOAH** you now have a version of this website hooked to a spreadsheet that you can distrubute however you'd like._


## But How?

A Google Spreadsheet holds all the data and it is connected to this website using the goodies in [sheetsee.js](http://www.github.com/jlord/sheetsee.js). Everytime you visit the website, you'll have the most up to date data that has been entered into the spreadsheet. 


