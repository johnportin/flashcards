import './Flashcard.css';
import { useState } from 'react';

export default function Flashcard({ children }) {
    const [isRevealed, setIsRevealed] = useState(children.revealed);
    return (
        isRevealed ? <p>{children.answer}</p> : <p>{children.question}</p>
    );
}

