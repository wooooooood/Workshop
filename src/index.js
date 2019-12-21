import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
    <div className="app">
        Hello Azure world
    </div>
)

ReactDom.render(<App />, document.getElementById("app"))