import React from "react";
import HOCCounter from "./HOCCounter";

const CounterTwo = ({ count, handleCount, handleReset }) => {
  return (
    <>
      <div className="grid place-items-center py-8">
        <h2>{count}</h2>
        <div className="flex items-center justify-between gap-4">
          <button
            className="rounded-md border-gray-500 px-8 py-2 drop-shadow-md"
            onClick={handleCount}
          >
            CounterTwo
          </button>
          <button
            className="rounded-md border-gray-500 px-8 py-2 drop-shadow-md"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default HOCCounter(CounterTwo);
