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

<!-- **For instructions on using the individual components of Wirestorm, refer to your own Wirestorm site running locally.  There, you will see a page in the navigation called `Usage`.  This page will give you examples and instructions for using all of Wirestorm's powerful and unique features.** -->

## Segments Module ##

### Description ###

The segments module gives you multiple layout tools and features.  It includes:

1. __Panels__
2.  __Segments__ (columns running in thirds, fifths and sevenths.  Examples given below)
3. __Columns__

All of these components can have classes and an id attached to them, as well.

------------------------------------------------------

### Configuration ###

__jade:__

  - include `template_files/widgets/segments.jade`

__stylus:__

  - import `segments.styl`

------------------------------------------------------

### Components ###

#### 1. Panels ####

__Signature:__

`+panel()`

__Usage:__

```
+panel().dark
  h1 Title
  p Here is some content.

```

Panels are elements which stretch the entire length of the web browser, while simultaneously maintaining a constrained center for content.



The class attached to the item determines the background color.  For example:

```

.dark
  background-color #444

```

#### 2. Segments ####

__Signature__

```
+segment(param1)[.half][.thirds][.fifths][.sevenths]
  +min()
    ...
  +max()
    ...

```
- _param1:_ &lt;object> (optional)  &mdash; include a list of breakpoints in the form of an object
  - lg
  - md
  - tablet
  - sm
  - xs

__Usage:__

```
+segment().thirds
  +min()
    <img src="example.jpg" />
  +max()
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud.

```

Similar to columns, segments give you a dominate and subordinate column.  For example, let's say you want a layout with an image in the left-hand column and content on the right.  You could do the following:

```
+segment().thirds
  +min()
    <img src="example.jpg" />
  +max()
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud.

```

Segments can also be responsive:

```
+segment({lg : 'thirds', md : 'half', tablet : 'stack'})
  +min()
    <img src="example.jpg" />
  +max()
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud.

```

Segments have the following breakdown:

- __.sevenths__ (+max() = 4/7 of parent, +min() = 3/7 of parent)
- __.fifths__ (+max() = 3/5 of parent, +min() = 2/5 of parent)
- __.thirds__ (+max() = 2/3 of parent, +min() = 1/3 of parent)

#### 3. Columns ####

__Signature:__

```
+col(param1)
  +cell()
    ...

```

- param1: &lt;integer>, &lt;object> &mdash; as an integer, pass in the number of columns that you'd like to create.  As an object, pass in the responsive values in the form of an object.
  - lg
  - md
  - tablet
  - sm
  - xs

__Usage:__

```
+col(3)
  +cell()
    ...
  +cell()
    ...
  +cell()
    ...

```

&mdash; or &mdash;

```
+col({lg 3:, tablet : 1})
  +cell()
    ...
  +cell()
    ...
  +cell()
    ...

```



Columns are pretty straight forward.  They are used, as they sound.  The only thing to note is that the content of columns themselves are distinguished using `+cell()`.  For example:

```
+col(2)
  +cell()
    <div class="thumb">
      <img src="example.jpg" class="center" />
    </div>
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud.
  +cell()
    <div class="thumb">
      <img src="second-example.jpg" class="center" />
    </div>
    p.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit.

```

Columns, like segments, can also be responsive:

```
+col({lg : 2, tablet : 1})
  +cell()
    <div class="thumb">
      <img src="example.jpg" class="center" />
    </div>
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud.
  +cell()
    <div class="thumb">
      <img src="second-example.jpg" class="center" />
    </div>
    p.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit.

```
