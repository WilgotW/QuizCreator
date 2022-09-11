import React from 'react'

const PlayQuiz = ({quizes, quizTitle}) =>{
  return quizes.map((quiz, index) => (
    <div key={index}>
        <h1>{quizTitle}</h1>
        <div className='question-list'>
          {/* questions */}
        </div>
    </div>
  ))
}

export default PlayQuiz