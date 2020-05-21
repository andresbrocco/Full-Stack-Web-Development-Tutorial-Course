# React

React is used to modularize the development, creating elements that can be
inserted as html <Tags />. If the state of the element changes, it will
automatically _react_ to it, and re-render on the screen.

## Create react app using the default template

If you will use Sass, install it with `npm install -g node-sass`

```bash
npx create-react-app my-app
```

## Inside my-app directory, start the development server

```bash
cd my-app
npm start
```

Edit the src/App.js and save to reload
Make sure the text editor has support for jsx/tsx syntax highlighting

## Project structure

```tree
project
|---project-web
    |---node_modules
    |---public
        |---css
        |---js
            |---bootstrap.js
            |---jQuery.js
        |---index.html
    |---src
        |---App
            |---App.js
            |---App.css
            |---AppFiles
        |---AnotherComponent
            |---AnotherComponent.js
            |---AnotherComponent.css
            |---AnotherComponentFiles
        |---index.js
        |---index.css
|---project-api
    |---data
        |---db
    |---node_modules
    |---server.js
```

/public/index.html is the main page, where stuff will be injected.

/src/index.js specifies where to inject each element.

To create an html tag, create a class and export it.

## React uses ES6 language

It is a superset of javascript, with some additions:

- Classes, with `constructor()`, `methods()` and inheritance (`extends`);
- Arrow function (`hello = () => "Hello World"`);
- Variable declarations: `var`, `let`, and `const`;

```ES6
import _SomeThing_ from '_sourceOfSomething_';
class _AnotherThing_ extends _SomeThing_ { }
export default _AnotherThing_;
```

## Using React

- You can use {Javascript code surrounded with brackets} inside the html;
- Props can be passed through the `<Tag prop="argument">`;
- Use `getDerivedStateFromProps()` to update the state.
- Use the `setState()` method for updating, to tell the render it needs to reload.
- Use `componentDidMount()` method to run something after completing renderization;
- Don't forget to `bind()` functions when necessary (usually inside the component constructor)
- Use camelCase, for example `onClick={()=>}`.
