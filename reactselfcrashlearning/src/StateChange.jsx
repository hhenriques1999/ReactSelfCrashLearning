import { useState } from "react"

const TestingStateChange = () => {
    const [btnDisabled, setBtnDisabled] = useState(false);

    return (
        <div>
            <button disabled={btnDisabled} onClick={() => { setBtnDisabled(!btnDisabled) }}>
                Toggle button disabled
            </button>
        </div>
    );
}

export default TestingStateChange;