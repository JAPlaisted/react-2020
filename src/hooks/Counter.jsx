import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
    const [count, setCount] = useState(0);
    const  [name, setName] = useState('');

    useDocumentTitle(`${name} has clicked ${count} times!`);

    return (
        <div className="component">
            <input type="text" onChange={ e => setName(e.target.value) } />
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
        </div>
    );
}

export default Counter;