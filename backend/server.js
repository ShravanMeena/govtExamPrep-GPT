const OPENAI_API_KEY = "";
const model = "gpt-3.5-turbo-instruct";
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const { generatePrompt } = require("./utils");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


app.post("/generate-questions", async (req, res) => {
  const { examName, difficulty } = req.body;

  if (!examName || !difficulty) {
    return res.status(400).json({ error: "Invalid examName or difficulty provided" });
  }

  const prompt = generatePrompt(examName, difficulty);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: model,
        prompt: prompt,
        max_tokens: 1500,
        n: 1,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Attempt to parse the JSON response
    let questions;
    try {
      questions = JSON.parse(response.data.choices[0].text.trim());
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError.message);
      return res.status(500).json({ error: "Invalid JSON response from OpenAI" });
    }

    res.json({ questions });
  } catch (error) {
    console.error("Error generating questions:", error.message);
    res.status(500).json({ error: "Failed to generate questions" });
  }
});


app.post("/evaluate-answers", async (req, res) => {
    const { questions, answers } = req.body;
  
    if (!questions || !answers) {
      return res.status(400).json({ error: "Invalid questions or answers" });
    }
  
    try {
      const results = questions.map((question, index) => {
        return {
          question: question.question,
          userAnswer: answers[index],
          correctAnswer: question.correctAnswer,
          isCorrect: answers[index] === question.correctAnswer,
        };
      });
  
      const score = results.filter(result => result.isCorrect).length;
  
      res.json({ score, results });
    } catch (error) {
      console.error("Error evaluating answers:", error.message);
      res.status(500).json({ error: "Failed to evaluate answers" });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

