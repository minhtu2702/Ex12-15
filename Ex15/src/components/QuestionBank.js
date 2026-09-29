import React, { useReducer } from 'react';
import { questions } from '../data/data'; // Import dữ liệu từ data.js

const initialState = {
  questions: questions,
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload,
      };

    case 'NEXT_QUESTION': {
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextScore = isCorrect ? state.score + 1 : state.score;
      const isLastQuestion = state.currentQuestion + 1 >= state.questions.length;

      return {
        ...state,
        score: nextScore,
        currentQuestion: isLastQuestion
          ? state.currentQuestion
          : state.currentQuestion + 1,
        selectedOption: '',
        showScore: isLastQuestion,
      };
    }

    case 'RESTART_QUIZ':
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions: quizQuestions, currentQuestion, selectedOption, score, showScore } = state;

  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' });
  };

  return (
    <div style={{ textAlign: 'center', margin: '30px auto', maxWidth: '600px' }}>
      {showScore ? (
        <div>
          <h2 style={{ fontSize: '42px', marginBottom: '20px' }}>
            Your Score: {score}/{quizQuestions.length}
          </h2>
          <button
            onClick={handleRestartQuiz}
            style={{
              padding: '10px 20px',
              fontSize: '20px',
              cursor: 'pointer',
              backgroundColor: '#eee',
              color: '#000',
              border: '2px solid #000'
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>
            Question {currentQuestion + 1}
          </h2>
          <h3 style={{ fontSize: '28px', marginBottom: '25px', fontWeight: 'normal' }}>
            {quizQuestions[currentQuestion].question}
          </h3>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                style={{
                  padding: '10px 18px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  backgroundColor: selectedOption === option ? '#61dafb' : '#eee',
                  color: selectedOption === option ? '#000' : '#000',
                  border: '2px solid #000'
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <div>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              style={{
                padding: '8px 24px',
                fontSize: '20px',
                cursor: selectedOption ? 'pointer' : 'not-allowed',
                backgroundColor: selectedOption ? '#eee' : '#555',
                color: selectedOption ? '#000' : '#888',
                border: '2px solid #000'
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionBank;