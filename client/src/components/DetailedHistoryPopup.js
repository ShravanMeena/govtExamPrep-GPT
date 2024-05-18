import React from 'react';
import { Popup, DetailedPopup, Card, QuestionText, Option, Button } from '../styles';

const DetailedHistoryPopup = ({ selectedHistoryItem, handleHideHistory, setQuestions, setAnswers, setEvaluation }) => (
  <Popup>
    <DetailedPopup>
      <Button onClick={handleHideHistory}>Close</Button>
      <h3>{selectedHistoryItem.examName} - {selectedHistoryItem.difficulty}</h3>
      {selectedHistoryItem.answers.length === 0 && (
            <Button onClick={() => {
              setQuestions(selectedHistoryItem.questions);
              setAnswers(new Array(selectedHistoryItem.questions.length).fill(''));
              setEvaluation(null);
              handleHideHistory();
            }}>Re-Attempt</Button>
          )}
      <p>Generated: {selectedHistoryItem.generateDate}</p>
      {selectedHistoryItem.submitDate && <p>Submitted: {selectedHistoryItem.submitDate}</p>}
      {selectedHistoryItem.score !== undefined && <p>Score: {selectedHistoryItem.score}</p>}
      {selectedHistoryItem.questions.map((question, qIndex) => (
        <Card key={qIndex}>
          <QuestionText>{question.question}</QuestionText>
          {question.options.map((option, oIndex) => (
            <Option key={oIndex}>
              <input
                type="radio"
                name={`history-${selectedHistoryItem.id}-question-${qIndex}`}
                value={option}
                checked={selectedHistoryItem.answers[qIndex] === option}
                disabled={!!selectedHistoryItem.answers.length}
              />
              {option}
            </Option>
          ))}
          {selectedHistoryItem.answers.length > 0 && (
            <p>Your Answer: {selectedHistoryItem.answers[qIndex]}</p>
          )}
          
        </Card>
      ))}


    </DetailedPopup>
  </Popup>
);

export default DetailedHistoryPopup;
