import React, { useState } from 'react';
import ChildForConditionalRendering from './ChildForConditionalRendering';

function ParentForConditionalRendering() {
    const [shouldDisplay, setShouldDisplay] = useState(false);

    const handleClick = () => {
        setShouldDisplay(!shouldDisplay);
    };

    return (
        <div>
            <ChildForConditionalRendering shouldDisplay={shouldDisplay} />
            <button onClick={handleClick}>Click me to toggle the content</button>
        </div>

    )
}

export default ParentForConditionalRendering;