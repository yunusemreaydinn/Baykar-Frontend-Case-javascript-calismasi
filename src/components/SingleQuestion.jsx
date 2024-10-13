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

    const handleNextQuestion = () => {
        const answer = userChoice;
        handleAnswer(answer);

        if (currentIndex >= 9) {
            setIsQuizEnded(true);
        } else {
            setCurrentIndex((prev) => prev + 1);
            setTimer(30);
            setUserChoice("");
            setIsClickable(false);
        }
    };

    const handleForward = () => {
        handleNextQuestion();
    }

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) setTimer((prev) => prev - 1);

            if (timer === 20) setIsClickable(true);

            if (timer === 0) {
                handleNextQuestion();
            }
        }, 1000)
        return () => {
            clearInterval(countdown);
        }
    }, [timer])

    const changeButtonStyle = (opt) => {
        return userChoice === opt ? "border-blue-500 bg-blue-100" : "text-black hover:bg-slate-100 bg-slate-50 border-blue-200";
    };

    return (
        <div className='flex items-center justify-center w-full h-screen bg-slate-50'>
            <div className='flex flex-col gap-8 p-12 bg-white rounded-lg shadow-2xl lg:p-24 lg:w-1/2'>
                <div className='flex flex-col justify-between gap-12'>
                    <div className='flex justify-between'>
                        <h2 className='text-2xl'>Soru: <span className='font-bold'>{currentIndex + 1}/10</span></h2>
                        <p className='text-lg font-lg'>Kalan süre: <span className='font-bold'>{timer} sn.</span></p>
                    </div>
                    <p className='pb-8 font-medium'><span className=''>{currentQuestion?.body}</span></p>
                </div>
                <div className='flex flex-col gap-4'>
                    {
                        options.map((opt, i) => (
                            <button disabled={!isClickable} key={i} onClick={checkedOption} value={opt} className={`p-4 border-2 rounded-md text-left  ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'} ${changeButtonStyle(opt)}`}>
                                <span className='font-bold text-blue-600'>{String.fromCharCode(65 + i)}</span> - <span className=''>{opt}</span>
                            </button>
                        ))
                    }
                </div>
                <div className='text-right'>
                    <button onClick={handleForward} className='px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700'>İleri</button>
                </div>
            </div>
        </div>
    )
}

export default SingleQuestion

