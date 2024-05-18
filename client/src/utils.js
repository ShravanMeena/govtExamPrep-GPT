export const fetchQuestions = async (examName, difficulty, setQuestions, setAnswers, setEvaluation, history, setHistory) => {
    const response = await fetch('http://localhost:5000/generate-questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ examName, difficulty }),
    });
  
    const data = await response.json();
    setQuestions(data.questions);
    setAnswers(new Array(data.questions.length).fill(''));
    setEvaluation(null);
  
    const newHistoryItem = {
      id: Date.now(),
      examName,
      difficulty,
      questions: data.questions,
      answers: [],
      generateDate: new Date().toLocaleString(),
    };
  
    const updatedHistory = [newHistoryItem, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('mockTestHistory', JSON.stringify(updatedHistory));
  };
  
  export const submitAnswers = async (questions, answers, setEvaluation, history, setHistory) => {
    const response = await fetch('http://localhost:5000/evaluate-answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ questions, answers }),
    });
  
    const data = await response.json();
    setEvaluation(data);
  
    const updatedHistory = history.map((item) => {
      if (item.id === history[0].id) {
        return { ...item, answers, submitDate: new Date().toLocaleString(), score: data.score };
      }
      return item;
    });
  
    setHistory(updatedHistory);
    localStorage.setItem('mockTestHistory', JSON.stringify(updatedHistory));
  };
  