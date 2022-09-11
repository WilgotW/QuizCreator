import React from 'react'

const Question = ({questions}) => {
  return questions.map((question, index) => (
    <div key={index}>
        <p>Question: {index}</p>
        <input type="text" placeholder='Title'/>
        <input type="text" placeholder='Answer'/>
    </div>
  ))
}

export default Question;
