import './Flashcard.css';
import { useState } from 'react';

export default function Flashcard({ children }) {

    return (
        children.revealed ? <p>{children.answer}</p> : <p>{children.question}</p>
    );
}
