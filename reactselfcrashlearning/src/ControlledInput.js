import React, {useState} from "react";

function ControlledInput() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange}></input>
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default ControlledInput;