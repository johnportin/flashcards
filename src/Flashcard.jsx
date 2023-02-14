import './Flashcard.css';

export default function Flashcard({ data }) {
    return (
        <div style={{
            borderStyle: 'solid'
        }}>
            <p>
                {data.question}
            </p>
            <p className={ data.seen ? 'flashcard-visible' : 'flashcard-hidden' }>
                {data.answer}
            </p>
        </div>
        
    );
}

