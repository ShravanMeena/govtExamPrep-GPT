const generatePrompt = (examName, difficulty) => {
    return `
      You are an expert in creating exam questions for the ${examName}. Please generate ${difficulty} level questions in JSON format in Hindi.
      
      Here are the specifications:
      - The questions should be relevant to the ${examName}.
      - Ensure the questions are challenging and appropriate for the ${difficulty} level.
      - Provide four multiple-choice options for each question.
      - Clearly indicate the correct answer.
      - Each question should be unique and cover different topics within the ${examName}.
      - Generate exactly 10 questions.
      - The output must be valid JSON and follow this format:
  
      [
        {
          "question": "Your question here",
          "options": [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
          ],
          "correctAnswer": "A"
        },
        ...
      ]
      Ensure the JSON is valid and properly formatted.
    `;
  };
  
  module.exports = { generatePrompt };
  