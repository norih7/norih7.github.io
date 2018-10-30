import React from "react";

function clickError() {}

function ErrorComponent() {
    return (
        <div>
            <button onClick={clickError}>error</button>
        </div>
    );
}

export default ErrorComponent;
