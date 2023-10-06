import { useCallback, useMemo } from "react";
import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    memo,
} from "react";
import "./App.css";

/*
 1. react  Unirirectional data flow
 means that the dom can not update state.
 the developer will update the satate
 and dom will reflect the updated state
*/
/**
 * 2. Difference between state and props
 * state is when component define  data locally itselt and only that component can manupulate that data
 * and props is same data when pass to another component
 *
 * state can be changed but props can not be changed
 */

/**
 * 3. LIFT STATE UP
 *  when multiple component depend same state, make those component as sibling and make inside a parent component
 */
const List = (props) => {
    return (
        <ul>
            {props.data.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};
const ItemCount = (props) => {
    return <p>{props.data.length}</p>;
};
const LiftStateUp = () => {
    const [state, setState] = useState(["a", "b", "c"]);

    return (
        <div>
            {/** multiple component shated same state */}
            <List data={state} />
            <ItemCount data={state} />
        </div>
    );
};

/**
 * 4. CONTROLLED VS UNCONTROLLED component
 * Controlled: when a input is bind to a state. Ex: user input in input then state change and state reflect to the input
 * Uncontrolled: when a input is not bind to any state
 */

const Control = () => {
    const [value, setValue] = useState("");
    const clickHandler = () => {
        alert(value);
    };
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={clickHandler}>OK</button>
        </div>
    );
};

const Uncontrol = () => {
    const inputRef = useRef();
    const clickHandler = () => {
        alert(inputRef.current.value);
    };
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={clickHandler}>OK</button>
        </div>
    );
};

/**
 * 5. what is ref
 *  React developer usually manupulate the virtual DOM. if developer want to manupulate the real
 *  DOM then refs give the functionality to accress the real DOM
 *
 */
const Ref = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return <input ref={inputRef} />;
};

/**
 * 6. What is keys?
 *  Keys help React identify which items have changed, are added, or are removed.
 *  Keys should be given to the elements inside the array to give the elements a stable identity:
 */

/**
 *
 * 7. Context?
 * context help to pass data among the component with in same tree. It helps to avoid props drilling
 */

const Context = createContext();

const Child = () => {
    return <GrandChild />;
};

const GrandChild = () => {
    const context = useContext(Context);

    return <p>{context}</p>;
};

/**
 *
 * 8. High order component
 * High order conponent is a function whict take a component as argument and return augmented component
 * Higher Order component helps to share the same logic amoung the components without coping the code
 */
const detectHover = (Component) => {
    return (props) => {
        const [hover, setHover] = useState(false);
        return (
            <div
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Component hover={hover} {...props} />
            </div>
        );
    };
};

/**
 *
 * 9. render prop
 *
 */

/**
 *
 * 10. what is hock?
 * hock allow us to hock into the react life cycle in functional component
 * hock help to share logic in multiple component like higher order component
 */
const CustomHock = () => {
    const [hoverRef, hovered] = useHover();
    const style = { backgroundColor: hovered ? "green" : "" };
    return (
        <div style={style} ref={hoverRef}>
            <h1>Custom Hock</h1>
        </div>
    );
};
const useHover = () => {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
        }
        return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);
    return [ref, value];
};
/**
 *
 *   11. what is useEffect
 *   useEffect works like compomentDidMoint, componentWillUnmount, componentDidUpdate
 */
const UseEffect = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log("You have update the number");
    }, [number]);

    return (
        <button onClick={() => setNumber((prevState) => prevState + 1)}>
            Click Me
        </button>
    );
};

/**
 * 12. what is react memo?
 * react memo allow component to render only when the props pass to component is changed
 */
/**
 * 13. useCallback
 * useCallback memorize a function, it insure that a function will be recreated while the dependency will change
 */
/**
 * 14. useMemo
 *  useMemo memorize the value of a function. when a function compute a large number and the input
 * of the function does not change, we can use the useMemo to memorize the value
 */
const ChildMemo = memo((someFunction) => {
    console.log("I am rendering");
    return <h1>I am child</h1>;
});
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ParentMemo = () => {
    const [value, setValue] = useState(0);

    const someFunction = useCallback(() => {}, []);

    const largestNumber = useMemo(() => {
        console.log("I am working");
        return Math.max(...arr);
    }, []);

    return (
        <div>
            <ChildMemo someFunction={someFunction} />
            <p> {value}</p>
            <button onClick={() => setValue((prevState) => prevState + 1)}>
                Memo
            </button>
            <p>{largestNumber}</p>
        </div>
    );
};

function App(props) {
    const style = { backgroundColor: props.hover ? "red" : "" };
    return (
        <Context.Provider value={1}>
            <div className='App'>
                <LiftStateUp />
                <Control />
                <Uncontrol />
                <Ref />
                <Child />

                <div style={style}>
                    <h1>High Order Component!</h1>
                </div>
            </div>
            <CustomHock />
            <UseEffect />
            <ParentMemo />
        </Context.Provider>
    );
}

export default detectHover(App);
