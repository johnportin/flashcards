import './Dashboard.css';
import { useState } from 'react';
import Controls from './Controls.jsx';
import Flashcard from './Flashcard.jsx';
import History from './History.jsx';

export default function Dashboard() {
    const [index, setIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);
    const [data, setData] = useState(questions);

     // Create array of Flashcard components from data
    const flashcards = [];
    data.forEach((datum) => {
        flashcards.push(<Flashcard data={datum}></Flashcard>)
    });

    function onForwardClick() {
        setIndex((((index + 1) % data.length) + data.length) % data.length);
Z    };

    function onBackwardClick() {
        setIndex((((index - 1) % data.length) + data.length) % data.length);
    };

    function handleRevealClick() {
        const nextData = data.map((datum, i) => {
            if (i === index) {
                return {
                    ...datum, 
                    seen: !datum.seen
                }} else {
                    return datum
                }
            }
        );
        setData(nextData);
    }

    function handleReset() {
        const nextData = data.map((datum) => {
            return {
                ...datum,
                seen: false
            }
        });
        setData(nextData);
    }

    return (
        <>
            { flashcards[index] }
            <Controls
                index={index} 
                forward={onForwardClick} 
                backward={onBackwardClick} 
                handleRevealClick={handleRevealClick}
                handleReset={handleReset}
            />
            <History
                data={data}
                index={index}
            />
        </>
    );
}

const questions = [
    {
        id: 1,
        question: 'question1',
        answer: 'answer1',
        seen: false
    },
    {
        id: 2,
        question: 'question2',
        answer: 'answer2',
        seen: false
    },
    {
        id: 3,
        question: 'question3',
        answer: 'answer3',
        seen: true
    }
  ]