import React from "react";

function ChildComponent( {shouldDisplay} ) {
    return (
        <div>
            {shouldDisplay && <p>This should display automagically if shouldDisplay is true.</p>}
        </div>
    );
}

export default ChildComponent;