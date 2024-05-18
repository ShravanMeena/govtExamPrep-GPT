import React, { useState, useEffect } from 'react';
import { Container, Title, HistoryButton } from './styles';
import Form from './components/Form';
import Questions from './components/Questions';
import History from './components/History';
import DetailedHistoryPopup from './components/DetailedHistoryPopup';
import Result from './components/Result';
import { fetchQuestions, submitAnswers } from './utils';

function App() {
  const [examName, setExamName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [evaluation, setEvaluation] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('mockTestHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleFetchQuestions = async () => {
    setLoading(true);
    await fetchQuestions(examName, difficulty, setQuestions, setAnswers, setEvaluation, history, setHistory);
    setLoading(false);
  };

  const handleSubmitAnswers = () => {
    submitAnswers(questions, answers, setEvaluation, history, setHistory);
  };

  const handleShowHistory = () => {
    setShowHistory(true);
  };

  const handleHideHistory = () => {
    setShowHistory(false);
    setSelectedHistoryItem(null);
  };

  const handleSelectHistoryItem = (item) => {
    setSelectedHistoryItem(item);
  };

  return (
    <Container>
      <Title>Mock Test App</Title>
      <Form
        examName={examName}
        setExamName={setExamName}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        fetchQuestions={handleFetchQuestions}
        loading={loading}
      />
      {questions.length > 0 && (
        <Questions
          questions={questions}
          answers={answers}
          setAnswers={setAnswers}
          submitAnswers={handleSubmitAnswers}
        />
      )}
      {evaluation && (
        <div>
          <h2>Evaluation</h2>
          <p>Score: {evaluation.score}</p>
          {evaluation.results.map((result, index) => (
            <Result key={index} result={result} />
          ))}
        </div>
      )}
      <HistoryButton onClick={handleShowHistory}>Show History</HistoryButton>
      {showHistory && (
        <History
          history={history}
          handleHideHistory={handleHideHistory}
          handleSelectHistoryItem={handleSelectHistoryItem}
        />
      )}
      {selectedHistoryItem && (
        <DetailedHistoryPopup
          selectedHistoryItem={selectedHistoryItem}
          handleHideHistory={handleHideHistory}
          setQuestions={setQuestions}
          setAnswers={setAnswers}
          setEvaluation={setEvaluation}
        />
      )}
    </Container>
  );
}

export default App;
