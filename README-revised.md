## Segments Module ##

### Description ###

The segments module gives you multiple layout tools and features.  It includes:

1. __Panels__
2.  __Percentage segments__ (columns running in thirds, fifths and sevenths.  Examples given below)
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

#### 2. Percentage Segments ####

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

Similar to columns, percentage layouts give you a dominate and subordinate column.  For example, let's say you want a layout with an image in the left-hand column and content on the right.  You could do the following:

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
