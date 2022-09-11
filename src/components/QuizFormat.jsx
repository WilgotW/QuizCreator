import React, { useState } from 'react'
import Question from './Question';

const QuizFormat = ({quizes, setQuizName}) => {
    const [questions, setQuestions] = useState([]);
    const addQuestion = q => {
        const newQuestions = [q, ...questions];
        setQuestions(newQuestions);
    }

    const onChange = e =>{
      setQuizName(e.target.value);
    }
  return quizes.map((quiz, index) => (
    <div key={index}>
        <input type="text" placeholder='Quiz Name' onChange={onChange}/>
        <button onClick={addQuestion}>Add Question</button>
        <Question questions={questions}/>
        <button>Finish Quiz</button>
    </div>
  ))
}

export default QuizFormat