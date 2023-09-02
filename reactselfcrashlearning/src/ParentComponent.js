import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [parentData, setParentData] = useState("Initial data");

    const updateData = (newData) => {
        setParentData(newData);
    };

    return (
        <div>
            <h1>{parentData}</h1>
            <ChildComponent updateParent={updateData}/>
        </div>
    );
}

export default ParentComponent;