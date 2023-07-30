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

```
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
```

## 4. useContext
* React Context is a way to manage state globally.
* It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

```
import React, { useContext } from "react";

const ThemeContext = createContext();

const App = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
        The current theme is {theme}
        </div>
    );
    };

    const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
        {children}
        </ThemeContext.Provider>
    );
};

export default App;
```


## 5. useLayoutEffect
The useLayoutEffect hook in React is similar to the useEffect hook, but it runs synchronously after all DOM mutations. This can be useful for performing layout calculations or updating the DOM after the component has rendered.

The useLayoutEffect hook takes two arguments:

* The first argument is a callback function that will be called after the component renders.
* The second argument is an optional array of dependencies. The callback function will only be called if any of the dependencies change.
Here is an example of how to use the useLayoutEffect hook to perform a layout calculation:

```
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
```

## 6. useReducer
* The useReducer Hook is similar to the useState Hook.
* It allows for custom state logic.
* If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

#### SYNTAX:   const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });


## 7. useMemo
useMemo is a React hook that allows you to cache the result of a calculation between re-renders. This can be used to improve performance by avoiding the need to re-calculate expensive functions on every render.

The useMemo hook takes two arguments:

1. A function that returns the value to be memoized.
2. An array of dependencies.

The function passed to useMemo will only be called if one of the dependencies changes. The memoized value will then be returned on subsequent renders, even if the dependencies do not change.
we can't use useEffect because it does not return value.


## 8. useCallback
* useCallback is a React Hook that lets you cache a function definition between re-renders.
* On the initial render, useCallback returns the fn function you have passed.
* During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.


## React.memo

React Memo is a higher-order component (HOC) that can be used to memoize the output of a functional component. This can improve performance by preventing unnecessary re-renderings when the props of the component do not change.
When React renders MyComponent, it will compare the props passed to the component with the props that were passed to the component the last time it rendered. If the props are the same, React will not re-render the component. This can save a significant amount of time, especially if the component is expensive to render.
React Memo only memoizes the output of the component. If the component's props change, but the component's state or context does not change, the component will still re-render.

** It can introduce unexpected side effects if you are not careful. For example, if you are using React Memo to memoize a component that renders a child component, the child component will not be re-rendered if the props of the parent component change. This can lead to unexpected behavior if the child component depends on the props of the parent component.

React.memo will not work if you pass a function in prop if you do not use the second argument to indicate an equality check function. This is because React.memo only compares the props passed to the component with the props that were passed to the component the last time it rendered using a shallow comparison. If you pass a function as a prop, React will compare the references of the functions, which will always be different because function gets recreate after rerender in react. To slove this problem we use useCallback 



## Referential Equality
* Referential equality in React is a comparison of two objects based on their memory location. If two objects have the same memory location, they are considered equal. If they have different memory locations, they are considered different.

* Referential equality is used by React to determine whether a component should be re-rendered. If the props passed to a component change, but the objects that represent the props are the same, React will not re-render the component. This is because the component's state will not have changed, and there is no need to update the UI.

* However, there are some cases where referential equality can lead to unexpected behavior. For example, if you change the value of a property on an object, the object will still be considered equal to the old object. This is because the memory location of the object has not changed.

* To avoid this problem, you can use the Object.is() function to compare objects. The Object.is() function compares two objects based on their values, not their memory location. This means that if you change the value of a property on an object, the object will no longer be considered equal to the old object.