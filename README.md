# Wirestorm 2 #

## What is Wirestorm? ##

Wirestorm is a framework built on Jade, Stylus and Jeet, that leverages these technologies in order to allow developers and designers to build dynamic and "functional" wireframes __fast__.

## Why use code to wireframe? ##

"Visual" wireframes - those made up of images - can be fine, but fall short in larger scope projects.  What happens when your wireframe grows to 30 or 40 pages?  Are just images enough?  Does your wireframe demonstrate what happens when it goes from desktop to mobile?  With wirestorm, since it's composed of code, you get not only a visual representation, but also a functional representation helping you to visualize "flow" and "behavior".  Now, keep in mind, the end goal is to stay at a lower level of fidelity.  It is a "tool" and not a replacement for the actual website.  But with wirestorm, you get an exceptional view of: 

- How your pages connect
- How the Desktop version will morph into the Mobile versions
- How dynamic components will behave, such as:
	- search
	- modals
	- tabs
	- etc

So, instead of describing, "Then, when you click this button, you will go here", you simply make it happen, and the behavior is self-evident.  Nice!

## Installation ##

Download or clone the Wirestorm repo.

__Note:__ Wirestorm requires the following dependencies:

- jade
- for CSS:
	- stylus
	- jeet
	- nib
	- rupture

Download and install NodeJS. You will use Node's NPM feature to install all of the above dependencies.  Open a terminal.  For each, type the following:

```
npm install -g stylus
```

```
npm install -g jeet
```

. . . and so forth, until you have installed them all.  If you run into any difficulties, go to their respective sites and follow the instructions for installation.


Once you have gone through and installed all of the above dependencies, then type:

```
cd ~/path/to/wirestorm/directory
npm install
```

Let the process run.  NPM will run through and install all of  Wirestorm's other dependencies.

When it has completed, type:

```
node start
```

This will start a server for you, open your default browser, navigate to the url, and start a "watch" service running in the background for you.  This watch service will compile the proper files for you anytime you make changes to the editable wirestorm files as is described below.

You are ready to start creating.

When you have finished your session, go back to the terminal and hold down `ctrl c`.  This will terminate the server and watch service.

Wirestorm also utilizes __livereload__.  If you are using Chrome, for example, you can add the _livereload_ extension and everytime you save a change, your browser will automatically refresh with the new change.

## Wirestorm Usage ##

When you first open up the wirestorm folder, you will see the following subfolders:

- `__pages__`
- `__styles__`
- `app`
- `template_files`

The two underscored files are for you: One for html, and one for css.  The `__pages__` folder is where you will build your structure, the html.  The `__styles__` folder is where all of your css styles will live.  In the `__styles__` folder, you will find a file called `main.styl`.  This is where you add any custom styles of your own, beyond what wirestorm provides.

The `__pages__` folder is a little more complex: In this folder, you will see another folder named `__core__`.  Within `__core__` you have the header and footer templates, and the nav file.  The header, footer and nav file are there for you to modify.  Just note that they are the main files for your entire site: make one change, and it will show up on all pages.  Going back to the root of the `__pages__` folder, we see a file called `default.jade`.  You should never need to edit this file.  It contains the blueprint for all pages.  If you decide that you do want to add a new section to all pages, something that header, footer and nav can't do, you can add or include it in this file.

Use the `index.jade` page as a blueprint, as you create new pages.  Make sure to save new pages with the extension `jade`, such as `new-page.jade`.

A typical page would look something like this:

```
extend default
block content
	+panel('light')
		//- Your content goes here!
```

**For instructions on using the individual components of Wirestorm, refer to your own Wirestorm site running locally.  There, you will see a page in the navigation called `Usage`.  This page will give you examples and instructions for using all of Wirestorm's powerful and unique features.**