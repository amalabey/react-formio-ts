import * as React from "react";
import {render} from "react-dom";

import {Formio} from "react-formio";

const App = () => (
    <div>
        <h1> Hello from simple React App </h1>
        <hr/>
        <Formio src="https://example.form.io/example" />
    </div>
);

render(<App/>, document.getElementById("root"));
