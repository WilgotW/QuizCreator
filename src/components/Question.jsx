import React from 'react'

const Question = ({questions}) => {
  return questions.map((question, index) => (
    <div>
        <p>Question: {questions.length}</p>
        <input type="text" placeholder='Title'/>
        <input type="text" placeholder='Answer'/>
    </div>
  ))
}

export default Question;
