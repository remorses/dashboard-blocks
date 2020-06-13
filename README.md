<div align='center'>
  <br/>
    <br/>
    <img src='https://landing-blocks.now.sh/logo_icon_black.svg' width='180px' />
    <br/>
    <h3>Dashboards building blocks</h3>
    <!-- <a href='https://dashboard-blocks.now.sh#demos'>See some landing pages built with <code>dashboard-blocks</code></a> -->
    <br/>
    <br/>
    <br/>
</div>

`dashboard-blocks` is an npm package that groups together many useful components that can be composed together to create beautiful Dashboards.

## Install

```sh
yarn add dashboard-blocks @emotion/core @chakra-ui/core
```

Features

-   Dark mode
-   No global css dependency (only css in js with emotion)
-   Easiest thing ever
-   Pretty by default

## Todo

Dashboard blocks

## Dashboard Layout

Layout with sidebar to easily create a dashboard skeleton, children are rendered side to the nav links.
The side nav is rendered as a select when in mobile view.

### Block

A container for a graph, a stat, a table, can have a title (can be an outer title)
Manages the space around and has a cool shadow or border

### Table

Display elements inside a table with a top header
Manages truncating its children,
Has a load more button,

### Chart

Display a graph with good defaults (depends on apex charts).
Has a select to choose the time domain.

### Breadcrumbs

Breadcrumbs to display the current path

### Back link

Link with a back arrow

### Error message

Block with an error icon and red text

### Banner

Banner block that highlights new changes and features,
Can have an icon
