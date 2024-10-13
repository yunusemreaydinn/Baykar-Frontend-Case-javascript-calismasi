import { useEffect, useMemo, useState } from "react"
import { fetchQuestions } from "../services/questionService"
import SingleQuestion from "./SingleQuestion";
import Result from './Result';
import Welcome from "./Welcome";

const Quiz = () => {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [testAnswers, setTestAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };

    getQuestions();
  }, []);

  const handleStart = () => {
    setQuizStarted(true);
  }

  const handleAnswer = (answer) => {
    setTestAnswers((prev) => [
      ...prev, { question: questions[currentIndex].body, correctAnswer: questions[currentIndex].title, userAnswer: answer }
    ]);
  }


  return (
    <div className="flex items-center justify-center h-screen">
      {
        !quizStarted ? (
          <Welcome handleStart={handleStart} />
        ) : isQuizEnded ? (
          <Result testAnswers={testAnswers} />
        ) : (
          <SingleQuestion questions={questions} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setIsQuizEnded={setIsQuizEnded} handleAnswer={handleAnswer} />
        )
      }
    </div>
  )
}

export default Quiz
