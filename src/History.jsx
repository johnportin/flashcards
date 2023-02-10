import './History.css';

export default function History({ index, data }) {
    // Need to add reasonable key
    const flashcardHistoryViews = [];
    data.forEach((datum) => {
        flashcardHistoryViews.push(
            <FlashcardHistoryView
                key={datum.id} 
                question={datum.question} 
                seen={datum.seen}    
            />
        );
    });

    return (
        <div>
            <p> {index + 1} / {data.length} </p>
            {[...flashcardHistoryViews]}
        </div>
    );
}

function FlashcardHistoryView({ question, seen }) {
    return (
        <div className={seen ? "flashcard-history-seen-container" : "flashcard-history-unseen-container"}>
            {question}
        </div>
    );
}