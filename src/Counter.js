import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => {
            return prevCounter + 1;
        })
    }

    const decrement = () => {
        setCounter(prevCounter => {
            return prevCounter - 1;
        })
    }

    return (
        <div className="max-w-md mx-auto mt-10 space-y-5">
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold">{counter}</div>
                
                <div className="flex space-x-3">
                    <button
                        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        onClick={increment}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-red-400 text-white px-3 py-2 rounded shadow"
                        onClick={decrement}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter;
