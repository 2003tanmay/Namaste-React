import React from "react"
import ReactDOM from "react-dom/client";
//previously we are importing react from CDN linkes but now we are using import to import the react

const heading = React.createElement(    
    "h1",                               
    {id: "heading"},                    
    "Hello World from React by parcel!"           
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);