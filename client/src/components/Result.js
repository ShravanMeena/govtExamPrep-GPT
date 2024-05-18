import React from 'react';
import { ResultContainer } from '../styles';

const Result = ({ result }) => (
  <ResultContainer correct={result.isCorrect}>
    <p>{result.question}</p>
    <p>Your Answer: {result.userAnswer}</p>
    <p>Correct Answer: {result.correctAnswer}</p>
    <p>{result.isCorrect ? 'Correct' : 'Incorrect'}</p>
  </ResultContainer>
);

export default Result;
