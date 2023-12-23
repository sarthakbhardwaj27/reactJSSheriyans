import React, { useState } from "react";

function Counter() {
    const [val, setVal] = useState(69);
  return (
    <>
    <div className="w-full h-52 bg-zinc-900 p-10 text-white flex gap-5">
        <h1 className="">{val}</h1>
        <button
          className="w-22 h-12 bg-green-200 p-2 text-black rounded-xl"
          onClick={() => setVal((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          className="w-22 h-12 p-2 bg-red-400 text-white rounded-xl"
          onClick={() => setVal((prev) => prev - 1)}
        >
          Decrement
        </button>
      </div>
    
    </>
  )
}

export default Counter