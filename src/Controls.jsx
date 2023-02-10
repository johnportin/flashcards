import './Controls.css';

export default function Controls({index, forward, backward }) {
    return (
        <>
            <div>
                {index}
            </div>
            <button onClick={forward}> Increase </button>
            <button onClick={backward}> Decrease </button>
        </>
    );
}