import './Dashboard.css';
import { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import Controls from './Controls.jsx';

export default function Dashboard() {
    const [index, setIndex] = useState(0);
     // Create array of Flashcard components from data
    const flashcards = [];
    data.forEach((datum) => {
    flashcards.push(<Flashcard>{datum}</Flashcard>)
    });

    function onForwardClick() {
        setIndex((((index + 1) % data.length) + data.length) % data.length);
    };

    function onBackwardClick() {
        setIndex((((index - 1) % data.length) + data.length) % data.length);
    };

    return (
        <>
            { flashcards[index] }
            <Controls
                index={index} 
                forward={onForwardClick} 
                backward={onBackwardClick} 
            />
        </>
    );
}

const data = [
    {
        question: 'question1',
        answer: 'answer1',
        revealed: true
    },
    {
        question: 'question2',
        answer: 'answer2',
        revealed: false
    },
    {
        question: 'question3',
        answer: 'answer3',
        revealed: true
    }
  ]