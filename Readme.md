# Hooks

## 1. useState
The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries. The first element is the initial state and the second one is a function that is used for updating the state.
##### SYNTAX: const [state, setState] = useState(initialstate)

* useState	
1. The component will re-render when the state is updated.
2. Synchronization	The state is always synchronized with the view.
* Normal variable
1. The component will not re-render when the variable is updated.
2. The variable may not be synchronized with the view.

## 2. useEffect
The useEffect hook in React is used to perform side effects in functional components. Side effects are any operations that have an external impact, such as fetching data from an API, updating the DOM, or subscribing to an event.

The useEffect hook takes two arguments:
* The first argument is a callback function that will be called after the component renders.
* The second argument is an optional array of dependencies. The callback function will only be called if any of the dependencies change.


## 3. useRef
* The useRef hook in React is used to create a reference to a mutable value that persists between renders. 
This can be useful for storing things like the current value of a slider, the focus state of an input, or the scroll position of a div.
* The useRef hook takes one argument, which is the initial value of the reference. The reference will be initialized to this value when the component first renders, and it will persist between renders.

Here is an example of how to use the useRef hook to store the current value of a slider:

    import React, { useRef } from "react";
    
    const App = () => {
        const sliderRef = useRef(0);
        
        function handleChange(event) {
            sliderRef.current = event.target.value;
        }
        
        return (
            <div>
            <input type="range" ref={sliderRef} />
            <h1>The current value is {sliderRef.current}</h1>
            </div>
        );
    };
    export default App;


## 4. useContext
The useLayoutEffect hook in React is similar to the useEffect hook, but it runs synchronously after all DOM mutations. This can be useful for performing layout calculations or updating the DOM after the component has rendered.

The useLayoutEffect hook takes two arguments:

* The first argument is a callback function that will be called after the component renders.
* The second argument is an optional array of dependencies. The callback function will only be called if any of the dependencies change.
Here is an example of how to use the useLayoutEffect hook to perform a layout calculation:

    import React, { useLayoutEffect } from "react";

    const App = () => {
        const [width, setWidth] = useState(0);

        useLayoutEffect(() => {
            const el = document.getElementById("my-element");
            setWidth(el.offsetWidth);
        }, []);

        return (
            <div id="my-element" />
        );
    };


## 5. useLayoutEffect

The useLayoutEffect hook in React is similar to the useEffect hook, but it runs synchronously after all DOM mutations. This can be useful for performing layout calculations or updating the DOM after the component has rendered.

The useLayoutEffect hook takes two arguments:

* The first argument is a callback function that will be called after the component renders.
* The second argument is an optional array of dependencies. The callback function will only be called if any of the dependencies change.
Here is an example of how to use the useLayoutEffect hook to perform a layout calculation:

    import React, { useLayoutEffect } from "react";

    const App = () => {
        const [width, setWidth] = useState(0);

        useLayoutEffect(() => {
            const el = document.getElementById("my-element");
            setWidth(el.offsetWidth);
        }, []);

        return (
            <div id="my-element" />
        );
    };