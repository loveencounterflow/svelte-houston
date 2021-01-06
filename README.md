


# Svelte Houston: Push Button Assemblies

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [Assembly](#assembly)
  - [States](#states)
  - [Layout](#layout)
  - [Inspiration](#inspiration)
- [component-template](#component-template)
  - [Setting up](#setting-up)
  - [Consuming components](#consuming-components)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Assembly

```html
<Socket sktlayout=row>
  <Socket sktlayout=column>
    <Button _position=v3nr1><Cap>lobby</Cap></Button>
    <Button _position=v3nr2><Cap _color=yellow>bar</Cap></Button>
    <Button _position=v3nr3><Cap _color=lime>parlor</Cap><Cap _color=#ff4949>parlor</Cap></Button>
    </Socket>
```


## States

* Cap: Caps have both a backdrop that can be styled with anything that is an acceptable right-hand side for
  a CSS `{ background: ...; }` rule and a place to display text.
  * Text can be dynamic even with a single cap, as can be background color,
  * but can also display different caps as needed
* Lamp: can be either dark or lit; implemented as a filter in the bezel


## Layout

* Bezel
* Caps
  * Nudge


## Inspiration

* [Fran Blanche: *Houston, We Have A Button!!! The Illuminated Switches Of Mission
  Control*](https://www.youtube.com/watch?v=DuZDcAhcTQo&t=4s)
* [Fran Blanche: *Mystery Military Missile Indicator*](https://www.youtube.com/watch?v=C73gqTP5XI4&t=94s)



------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------








*Psst — looking for an app template? Go here --> [sveltejs/template](https://github.com/sveltejs/template)*

---

# component-template

A base for building shareable Svelte components. Clone it with [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/component-template my-new-component
cd my-new-component
npm install # or yarn
```

Your component's source code lives in `src/Component.svelte`.

You can create a package that exports multiple components by adding them to the `src` directory and editing `src/index.js` to reexport them as named exports.

TODO

* [ ] some firm opinions about the best way to test components
* [ ] update `degit` so that it automates some of the setup work


## Setting up

* Run `npm init` (or `yarn init`)
* Replace this README with your own


## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
