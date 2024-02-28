import React, { useState, useCallback, useEffect } from "react";

function Passwordgen() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let symbols = "~!@#$%^&*()+_";

    if (includeNumber) characters += numbers;
    if (includeSymbol) characters += symbols;

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  }, [length, includeNumber, includeSymbol]);

  useEffect(() => {
    passwordGenerator();
  }, [length, includeNumber, includeSymbol, passwordGenerator]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="align-middle h-full w-full flex items-center justify-center">
      <div className="bg-black h-auto w-3/4 block text-white">
        <h1 className="text-center text-4xl mb-5 mt-5">Password generator</h1>
        <div className="items-center flex justify-center">
          <input
            className="text-black h-10 w-3/4 px-3"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
          />
          <button className="bg-blue-700 p-2.5" onClick={handleCopyClick}>
            copy
          </button>
        </div>
        <div className="flex justify-around mt-2 mb-4">
          <div className="flex justify-around">
            <input
              className="cursor-pointer"
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
            <label>Length:({length})</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={() => setIncludeNumber((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={includeSymbol}
              onChange={() => setIncludeSymbol((prev) => !prev)}
            />
            <label>Symbol</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwordgen;
