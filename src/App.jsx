import React, { useReducer } from "react";

//components
import Counter1 from "./components/Counter1";

//context
import { CounterContext } from "./context/CounterContext";

//reducer function
import { reducer } from "./context/CounterReducer";

function App() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <CounterContext.Provider value={{ count, dispatch }}>
                <Counter1 />
            </CounterContext.Provider>
        </>
    );
}

export default App;
