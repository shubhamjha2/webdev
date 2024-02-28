import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count+ 1);
    // setCount(cc=>cc + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count- 1);
    //   setCount(cc=>cc - 1);
    }
  };

  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Counter;
