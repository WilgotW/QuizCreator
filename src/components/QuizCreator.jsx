import React, { useState } from 'react'
import QuizFormat from './QuizFormat';

function QuizCreator() {
    const [quizes, setQuizes] = useState([]);

    const addQuiz = quiz => {
        const newQuizes = [quiz, ...quizes];
        setQuizes(newQuizes);
    }
  return (
    <div>
        <h1>Quiz Creator</h1>
        <button onClick={addQuiz}>Create Quiz</button>
        <QuizFormat quizes={quizes}></QuizFormat>
    </div>
  )
}

export default QuizCreator