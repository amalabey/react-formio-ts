"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var react_formio_1 = require("react-formio");
var App = function () { return (React.createElement("div", null,
    React.createElement("h1", null, " Hello from simple React App "),
    React.createElement("hr", null),
    React.createElement(react_formio_1.Formio, { src: "https://example.form.io/example" }))); };
react_dom_1.render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=App.js.map