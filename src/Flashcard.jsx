import './Flashcard.css';
import { useState } from 'react';

export default function Flashcard({ show, children }) {
    return (
        show ? <p>{children.answer}</p> : <p>{children.question}</p>
    );
}

