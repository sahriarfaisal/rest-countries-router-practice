import React from 'react';

const NoMatch = () => {
    const notFoundStyle= {
        border: '2px dotted red',
        borderRadius:'20px',
        margin: '30px',
        padding: '30px',
        color: 'pink'

    }
    return (
        <div style={notFoundStyle}>
            <h1>Not Found Error..</h1>
            <p>404</p>
        </div>
    );
};

export default NoMatch;