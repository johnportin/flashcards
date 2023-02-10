import './Controls.css';

export default function Controls({index, forward, backward, handleRevealClick }) {
    
    return (
        <>
            <button onClick={backward}> Decrease </button>
            <button onClick={forward}> Increase </button>
            <button onClick={handleRevealClick}>Reveal</button>
        </>
    );
}