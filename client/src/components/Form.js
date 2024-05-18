import React from 'react';
import { Label, Input, Select, Button } from "../styles";

const Form = ({ examName, setExamName, difficulty, setDifficulty, fetchQuestions, loading }) => (
  <div>
    <Label>
      Exam Name:
      <Input type="text" value={examName} onChange={(e) => setExamName(e.target.value)} />
    </Label>
    <Label>
      Difficulty:
      <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>
    </Label>
    <Button onClick={fetchQuestions} disabled={loading}>
      {loading ? 'Generation your mock paper...' : 'Fetch Questions'}
    </Button>
  </div>
);

export default Form;
