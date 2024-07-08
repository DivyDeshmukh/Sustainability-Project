import React, { useState, useEffect } from "react";

const quizQuestions = [
  {
    question: "What is the primary goal of sustainability?",
    options: [
      "Economic growth",
      "Resource conservation",
      "Technology advancement",
      "Population control",
    ],
    correctAnswer: "Resource conservation",
  },
  {
    question: "Which of the following is a renewable resource?",
    options: ["Coal", "Natural gas", "Solar energy", "Oil"],
    correctAnswer: "Solar energy",
  },
  {
    question: "What does the term 'carbon footprint' refer to?",
    options: [
      "The amount of carbon in the soil",
      "The amount of carbon dioxide emitted by an individual or organization",
      "The weight of carbon used in products",
      "The carbon content in food",
    ],
    correctAnswer:
      "The amount of carbon dioxide emitted by an individual or organization",
  },
  {
    question: "Which of the following practices can help reduce water usage?",
    options: [
      "Taking shorter showers",
      "Leaving the tap running while brushing teeth",
      "Watering plants during the hottest part of the day",
      "Using a dishwasher for half loads",
    ],
    correctAnswer: "Taking shorter showers",
  },
  {
    question: "What is the significance of the 3 R's (Reduce, Reuse, Recycle)?",
    options: [
      "They are a marketing strategy",
      "They help in managing waste effectively",
      "They are outdated concepts",
      "They are only applicable in industrial settings",
    ],
    correctAnswer: "They help in managing waste effectively",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdown);
          handleAnswerSubmission();
          return 10;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [currentQuestion]);

  const handleAnswerOptionClick = (option) => {
    setSelectedAnswer(option);
    handleAnswerSubmission(option);
  };

  const handleAnswerSubmission = (option = null) => {
    if (option === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setTimer(10);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold mb-8">Sustainability Quiz</h2>
      {showScore ? (
        <div className="text-2xl font-semibold">
          You scored {score}/{quizQuestions.length} right
        </div>
      ) : (
        <>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              {quizQuestions[currentQuestion].question}
            </h3>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`block w-full rounded-lg shadow-md p-4 mb-4 transition duration-300 text-left ${
                  selectedAnswer
                    ? option === quizQuestions[currentQuestion].correctAnswer
                      ? "bg-green-200"
                      : option === selectedAnswer
                      ? "bg-red-200"
                      : "bg-white"
                    : "bg-white hover:shadow-lg"
                }`}
                onClick={() => handleAnswerOptionClick(option)}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="text-gray-600">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </div>
          <div className="text-gray-600">Time remaining: {timer} seconds</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
