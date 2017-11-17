# Information

Get the position of an element relative to the `document`. The DOM element can be nested inside absolute/relative/fixed elements, and it'll reliably get you the absolute pixel coords.

Returns an object {x: [number 0], y: [number 0]}

# Install

`npm install --save recursive-calc-element-coords`

# Usage

```
import calcCoords from 'recursive-calc-element-coords'

const coords = calcCoords(document.getElementById('#really-nested-element'))

//--"coords"-->
// {
//   x: [Number],
//   y: [Number]
// }
```