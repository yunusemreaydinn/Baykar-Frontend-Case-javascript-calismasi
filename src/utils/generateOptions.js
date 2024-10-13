export const generateOptions = (correctAnswer, questions) => {
    let options = [];
    const randomizedQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 3);

    options.push(correctAnswer);
    randomizedQuestions.forEach(q => options.push(q.title));

    return options.sort(() => 0.5 - Math.random());
};