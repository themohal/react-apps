import React, { useState } from 'react';

function StateInFunctionalComponent() {
    const [name, setName] = useState("Farjad");
    function updateName() {
        setName("Farjad Ali");
    }
    return (
        <div>
            <h1>State in Functional Component</h1>
            <h2>{name} </h2>
           <button onClick={updateName}>Click Me</button>
        </div>
    );
}   
export default StateInFunctionalComponent;