import './App.css'
import Flashcard from './Flashcard.jsx';
import Controls from './Controls.jsx';

export default function App() {
  // Create array of Flashcard components from data
  const flashcards = [];
  data.forEach((datum) => {
    flashcards.push(<Flashcard>{datum}</Flashcard>)
  })
  return (
    <>
      { [...flashcards] }
      <Controls />
    </>
  )
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