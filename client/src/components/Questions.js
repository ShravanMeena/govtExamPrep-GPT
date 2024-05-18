import React from 'react';
import { Card, QuestionText, Option, Button } from '../styles';

const Questions = ({ questions, answers, setAnswers, submitAnswers }) => (
  <div>
    <h2>Questions</h2>
    {questions.map((questionData, index) => (
      <Card key={index}>
        <QuestionText>{questionData.question}</QuestionText>
        {questionData.options.map((option, i) => (
          <Option key={i}>
            <input
              type="radio"
              name={`question-${index}`}
              value={option}
              checked={answers[index] === option}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[index] = e.target.value;
                setAnswers(newAnswers);
              }}
            />
            {option}
          </Option>
        ))}
      </Card>
    ))}
    <Button onClick={submitAnswers}>Submit Answers</Button>
  </div>
);

export default Questions;
