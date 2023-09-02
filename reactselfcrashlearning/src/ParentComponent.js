import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const items = ['Apple', 'Banyanyer', 'Luhmn'];
    return (
        <ChildComponent itemList={items} />
    );
}

export default ParentComponent;