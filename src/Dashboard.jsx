import './Dashboard.css';
import { useState } from 'react';
import Controls from './Controls.jsx';
import Flashcard from './Flashcard.jsx';
import History from './History.jsx';

export default function Dashboard() {
    const [index, setIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

     // Create array of Flashcard components from data
    const flashcards = [];
    data.forEach((datum) => {
    flashcards.push(<Flashcard show={isRevealed}>{datum}</Flashcard>)
    });

    function onForwardClick() {
        setIndex((((index + 1) % data.length) + data.length) % data.length);
        handleReset();
    };

    function onBackwardClick() {
        setIndex((((index - 1) % data.length) + data.length) % data.length);
        handleReset();
    };

    function handleRevealClick() {
        setIsRevealed(!isRevealed);
        console.log('changing reveal');
    }

    function handleReset() {
        setIsRevealed(false);
    }

    return (
        <>
            { flashcards[index] }
            <Controls
                index={index} 
                forward={onForwardClick} 
                backward={onBackwardClick} 
                handleRevealClick={handleRevealClick}
            />
            <History
                data={data}
                index={index}
            />
        </>
    );
}

const data = [
    {
        question: 'question1',
        answer: 'answer1',
        seen: false
    },
    {
        question: 'question2',
        answer: 'answer2',
        seen: false
    },
    {
        question: 'question3',
        answer: 'answer3',
        seen: true
    }
  ]