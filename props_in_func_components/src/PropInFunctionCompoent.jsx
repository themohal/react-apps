import React from 'react';
function PropInFunctionCompoent(props) {
    return (
        <div>
            <h1>Prop in Function Component</h1>
            <h2>Name: {props.name}</h2>
            <h3>Email: {props.email}</h3>
        </div>
    );
}
export default PropInFunctionCompoent;