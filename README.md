# Attr Types

[![Build Status](https://travis-ci.org/qwtel/attr-types.svg?branch=master)](https://travis-ci.org/qwtel/attr-types)

Convert simple types to and from HTML node attributes.
This is useful when building WebComponents.

Note that this only allows simple types (as opposed to complex types), which are typically used in HTML attributes.
See [this](https://qwtel.com/good-bad-and-ugly-webcomponents/) on how to pass complex data to WebComponents.

## Parsing
```js
import AttrTypes from 'attr-types';

AttrTypes.string('asdf')   // => 'asdf'
AttrTypes.number('3')      // => 3
AttrTypes.array('w,a,s,d') // => ['w', 'a', 's', 'd']
AttrTypes.bool('')         // => true
AttrTypes.bool(null)       // => false

const aOfN = AttrTypes.arrayOf(number);
aOfN('1,2,3') // => [1, 2, 3]
aOfN('1,2,c') // => null

const lOrR = AttrTypes.oneOf(['left', 'right']);
AttrTypes.lOrR('left') // => 'left'
AttrTypes.lOrR('down') // => null
```

## Stringifying
```js
import AttrTypes from 'attr-types';

AttrTypes.number.stringify(3) // => '3'
AttrTypes.array.stringify(['w', 'a', 's', 'd']) // => 'w,a,s,d'
AttrTypes.bool.stringify(true) // => ''
AttrTypes.bool.stringify(false) // => null

const aOfN = AttrTypes.arrayOf(number);
aOfN.stringify([1, 2, 3]) // => '1,2,3'

const lOrR = AttrTypes.oneOf(['left', 'right']);
lOrR.stringify('left') // => 'left'
lOrR.stringify('down') // => null


```

## DOM Interaction
To get the value of an attribute (e.g. inside `attributeChangedCallback`):

```js
// You need to remember the type
const attrType = getTypeFor(attrName);
const value = attrType(el.getAttribute(attrName));
```

To reflect a changed property in the node attributes, use:

```js
// You need to remember the type
const attrType = getTypeFor(attrName);

const attr = attrType.stringify(value);

if (attr == null) {
  el.removeAttribute(attrName);
} else {
  el.setAttribute(attrName, attr);
}
```

AttrTypes is used in the wild by [hy-drawer] and [hy-push-state].

[prop-types]: https://www.npmjs.com/package/prop-types
[hy-drawer]: https://qwtel.com/hy-drawer/
[hy-push-state]: https://qwtel.com/hy-push-state/
