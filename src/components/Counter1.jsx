import React, { useContext } from "react";

//context
import { CounterContext } from "../context/CounterContext";

function Counter1() {
    const { count, dispatch } = useContext(CounterContext);

    return (
        <>
            <h1>Count is {count}</h1>
            <div>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>increment </button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement </button>
            </div>
        </>
    );
}

export default Counter1;
