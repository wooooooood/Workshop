import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
    <div className="app">
        Hello Azure world
    </div>
)

ReactDom.render(<App />, document.getElementById("app"))

//serviceworker 지원하지 않는 브라우저 걸러내기위함
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    })
}