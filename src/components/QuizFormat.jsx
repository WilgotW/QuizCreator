import React, { useState } from 'react'
import Question from './Question';

const QuizFormat = ({quizes}) => {
    const [questions, setQuestions] = useState([]);
    const addQuestion = q => {
        const newQuestions = [q, ...questions];
        setQuestions(newQuestions);
        console.log(newQuestions)
    }
  return quizes.map((quiz, index) => (
    <div>
        <p>Quiz Name</p>
        <input type="text" />
        <button onClick={addQuestion}>Add Question</button>
        <Question questions={questions}/>
    </div>
  ))
}

export default QuizFormat