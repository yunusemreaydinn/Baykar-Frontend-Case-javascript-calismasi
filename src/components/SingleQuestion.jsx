import React, { useEffect, useMemo, useState } from 'react'
import { generateOptions } from '../utils/generateOptions'

const SingleQuestion = ({ questions, currentIndex, setCurrentIndex, setIsQuizEnded, handleAnswer }) => {

    const [timer, setTimer] = useState(30);
    const [isClickable, setIsClickable] = useState(false);
    const [userChoice, setUserChoice] = useState("");


    const currentQuestion = questions[currentIndex];
    const options = useMemo(() => {
        return currentQuestion ? generateOptions(currentQuestion.title, questions) : [];
    }, [currentIndex, questions]);


    const checkedOption = (e) => {
        setUserChoice(e.currentTarget.value)
    }

    const handleForward = (e) => {
        const answer = userChoice;
        handleAnswer(answer);
        if (currentIndex >= 9) {
            setIsQuizEnded(true);
        }
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setTimer(30);
        setUserChoice("");
        setIsClickable(false);
    }

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) {
                setTimer((prevTimer) => prevTimer - 1);
            } if (timer <= 20) {
                setIsClickable(true);
            } if (timer == 0) {
                setCurrentIndex((prevIndex) => prevIndex + 1);
                setTimer(30);
            }
        }, 1000)
        return () => {
            clearInterval(countdown);
        }
    }, [timer])

    return (
        <div className='w-1/2 bg-blue-200'>
            <div className='flex justify-between gap-20'> <div><h2>Soru: {currentIndex + 1}/10</h2> <p>{currentQuestion?.body}</p></div>
                <p>Kalan süre: <br /> {timer} sn.</p>
            </div>
            <ul className='flex flex-col'>
                {
                    options.map((opt, i) => (
                        <button disabled={!isClickable} key={i} onClick={checkedOption} value={opt} className={`py-4 text-left border-4 hover:bg-white ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                            {String.fromCharCode(65 + i)}- {opt}
                        </button>
                    ))
                }
            </ul>
            <button onClick={handleForward}>İleri</button>
        </div>
    )
}

export default SingleQuestion

