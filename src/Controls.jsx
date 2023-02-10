import './Controls.css';
import { useState } from 'react';

export default function Controls() {
    const [index, setIndex] = useState(0);
    return (
        <>
            <div>
                {index}
            </div>
            <button onClick={() => setIndex(index + 1 )}> Increase </button>
            <button onClick={() => setIndex(index - 1 )}> Decrease </button>
        </>
    );
}