import { useState } from "react"

const TestingStateChange = () => {
    const [toggleTextVisible, setToggleTextVisible] = useState(false);

    return (
        <div>
            {toggleTextVisible && <p> Text visible </p>}

            <button onClick={() => { setToggleTextVisible(!toggleTextVisible) }}>
                Toggle text
            </button>
        </div>
    );
}

export default TestingStateChange;