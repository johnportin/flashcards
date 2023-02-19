import './Controls.css';

export default function Controls({forward, backward, handleRevealClick, handleReset }) {
    
    return (
        <>
            <button onClick={backward}> Prev </button>
            <button onClick={forward}> Next </button>
            <button onClick={handleRevealClick}>Reveal</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}