import React, { useState } from 'react'
import PlayQuiz from './PlayQuiz';
import QuizFormat from './QuizFormat';

function QuizCreator() {
    const [quizes, setQuizes] = useState([]);
    const [btnDisable, setBtnDisable] = useState(false);

    const addQuiz = quiz => { 
        const newQuizes = [quiz, ...quizes];
        setQuizes(newQuizes);

        btnDisable == true ? setBtnDisable(false) : setBtnDisable(true);
    }

    const showQuiz = () => {
        console.log(quizes);
    }
  return (
    <div>
        <h1>Quiz Creator</h1>
        <button onClick={addQuiz} disabled={btnDisable}>Create Quiz</button>
        <QuizFormat quizes={quizes}></QuizFormat>
        <button onClick={showQuiz}> Show Quizes</button>
        
        
        <div>
            <PlayQuiz
                quizes={quizes}
            ></PlayQuiz>
        </div>
    </div>
  )
}

export default QuizCreator