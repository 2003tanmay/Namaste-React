const heading = React.createElement(    //heading is nothing but an object (console.log(heading))
    "h1",                               //type of an object
    {id: "heading"},                    //properties of an object 
    "Hello World from React!"           //children of a tag
);

const root = ReactDOM.createRoot(document.getElementById("root"));

/* root.render(heading); /* the work of render is to take heading object and convert it to a DOM h1 tag and put in the root element of actual DOM. */

/*****************************************************************************************************/

/**
 * How do we create nested elements. Above we created just single element and render it but what about nested one like below
 * 
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm a h1 tag</h1>
 *     </div>
 * </div>
 */

const parent1 = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(           // childeren of parent div
        "div", 
        {id: "child"}, 
        React.createElement(       // childeren of child div
            "h1", 
            {}, 
            "I'm a h1 tag"
        )
    )
)

const root1 = ReactDOM.createRoot(document.getElementById("root"));

// root1.render(parent1);

/*****************************************************************************************************/

/**
 * How do we create sibling elements. Above we created just nested element and render it but what about nested with sibling one like below
 * 
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm a h1 tag</h1>
 *         <p>I'm a p tag</p>
 *     </div>
 * </div>
 */

const parent2 = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(           // childeren of parent div
        "div", 
        {id: "child"}, 
        [                          // sibling children if child div. For sibling we uses array
            React.createElement("h1", {}, "I'm a h1 tag"),
            React.createElement("p", {}, "I'm a p tag")
        ]
    )
)

const root2 = ReactDOM.createRoot(document.getElementById("root"));

//root2.render(parent2);

/*****************************************************************************************************/

/**
 * What if we have more complex structure
 * 
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm a h1 tag</h1>
 *         <p>I'm a p tag</p>
 *     </div>
 *     <div id="child2">
 *         <h1>I'm a h1 tag</h1>
 *         <p>I'm a p tag</p>
 *     </div>
 * </div>
 */

const parent3 = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement(           
            "div", 
            {id: "child"}, 
            [                          
                React.createElement("h1", {}, "I'm a h1 tag"),
                React.createElement("p", {}, "I'm a p tag")
            ]
        ),
        React.createElement(           
            "div", 
            {id: "child2"}, 
            [                          
                React.createElement("h1", {}, "I'm a h1 tag"),
                React.createElement("p", {}, "I'm a p tag")
            ]
        )
    ]
) // this is React 18

// this thing looks more complex and here react doesn't creates our life easy
// so, here comes JSX in picture to create this structure easy.

const root3 = ReactDOM.createRoot(document.getElementById("root"));

root3.render(parent2);