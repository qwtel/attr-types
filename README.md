# Attr Types
...

```js
const value = type(el.getAttribute(attrName));
if (value != null) el[key] = value;
```

```js
const attr = type.stringify(value);
if (attr === null || attr === 'false') {
  el.removeAttribute(attrName);
} else if (attr === 'true') {
  el.setAttribute(attrName, '');
} else {
  el.setAttribute(attrName, attr);
}
```
