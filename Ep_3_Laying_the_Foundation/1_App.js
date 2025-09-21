//For Episode 3 Laying the Foundation

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement(JS Object) => render => HTMLElement(HTML)

/*
 * This is very clumsy and hard to write html.
 * const heading = React.createElement(
 *     "h1",
 *     {id: "heading"},
 *     "Hello World from React by parcel!"
 * );
 * so, instead of this we use JSX(Javascript Syntax)
 */

//single line html, for multiline we wrap around in bracket ()
const jsxHeading = (
  <h1 id="heading"> Hello World from React by parcel using JSX </h1>
);
/* JSX is nothing HTML in JS but it is HTML, XML like syntax. This is not pure JS because JS engine
 * doesn't understand this, it understand only ECMA script(ES6 or all). Parcel(babel) convert before it
 * reaching the JS engine.
 * JSX => transpiling by babel => React.createElement(JS Object) => render => HTMLElement(HTML)
 */

// React Functional Component - 1st letter of word should be in capital and it return JSX.
// const HeadingComponent = () => (
//   <div id="container">
//     <h1>React Functional Component</h1>;
//   </div>
// );

//ways of writing functional components
/*
1.
const HeadingComponent = () => {
  <h1>React Functional Component</h1>; //without return
};

2.
const HeadingComponent = () => <h1>React Functional Component</h1>;

3. () for multiline JSX
const HeadingComponent = () => ( 
  <div>
    <h1>React Functional Component</h1>;
  </div>;
);

4. without arrow function
const HeadingComponent = function() {
  <h1>React Functional Component</h1>;
}
*/

//Way of rendering functional component in JSX
const Title = () => <h1>Title Functional Component</h1>;

// const HeadingComponent = () => (  //also known as component composition
//   <div id="container">
//     <Title/>
//     <Title></Title>
//     <h1>React Functional Component</h1>;
//   </div>
// );

// how to write normal JS code in JSX using {} bracket
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    <h1>{number + 100}</h1>
    {jsxHeading}
    {Title()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

// way of rendering functional component
root.render(<HeadingComponent/>);