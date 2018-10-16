import React from 'react';

const Input = (props) => {
    const {children} = props;
    return (
        <div>
        <form className="form-position-bottom">
            <button>{children}</button>
        </form>

    </div>
    );
}

export default Input;