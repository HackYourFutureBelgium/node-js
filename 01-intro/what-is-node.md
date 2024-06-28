# What is Node.js ?

## Introduction to Node.js

Node.js is an open-source and cross-platform JavaScript runtime environment, using the V8 JavaScript engine, the core of Google Chrome, outside of the browser. A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

## Differences between Node.js and the Browser

Both the browser and Node.js use JavaScript as their programming language. Building apps that run in the browser is completely different from building a Node.js application. Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the `document`, `window` and all the other objects that are provided by the browser. And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.

Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient. This means that you can write all the modern ES2015+ JavaScript that your Node.js version supports, without having to transpile your code using a tool like Babel.

Another difference is that Node.js supports both the CommonJS and ES module systems (since Node.js v12), while in the browser, we are starting to see the ES Modules standard being implemented. In practice, this means that you can use both require() and import in Node.js, while you are limited to import in the browser.

CommonJS:

```Js
var module = require('file path');
```

ESM:

```Js
import defaultStuff, { namedStuff } from 'file path';
```

Source : [Introduction to Node.js](https://nodejs.org/fr/learn/getting-started/introduction-to-nodejs)
