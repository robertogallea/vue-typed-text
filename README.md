# vue-typed-text
A vue plugin for rendering text-typing animation

## Introduction

With this plugin you can render a typing effect on your application or website. It may be configured to have a fixed text, and any number of typed texts. It also allows to define speed and delays. Please check the `configuration` section for further details.  

You can see an example on my website http://www.robertogallea.com

## Installation

You can install the package using npm with:

`
npm i vue-typed-text
`

## Usage

In order to use the package, import it in your main assets

```js
import VueTyping from 'vue-typed-text'

Vue.use(VueTyping)
```

Then you can use it in your application

## Example

```html
<text-typing fixed-text="Read while I type about"
             :texts="['Javascript', 'Vue', 'Anything else', 'Do you like it?']"
             :speed="100"
             :delay="3000"
             fixed-text-class="text-white"
             dynamic-text-class="text-teal-200"
             caret-class="text-white"></text-typing>
```

## Configuration

| Property | Description | Type | Required | Default value |
|--------------------|---------------------------------------------------------------|----------------|----------|---------------|
| fixed-text | The text which is always shown | 207-210mA | No | Empty string |
| texts | An array of typed texts | Array | Yes |  |
| Speed | The speed of the typing animation in ms for character | Number | No | 100 |
| Delay | The amount of time (in ms) waited before typing the next text | Number | No | 3000 |
| fixed-text-class | The class(es) to apply to the fixed text | String | Array | No |  |
| dynamic-text-class | The class(es) to apply to the typed text | String | Array | No |  |
| caret-class | The class(es) to apply to the caret character | String | Array | No |  |