import './Flashcard.css';
import { useState } from 'react';

export default function Flashcard({ children }) {
    return (
        children.seen ? <p>{children.answer}</p> : <p>{children.question}</p>
    );
}

