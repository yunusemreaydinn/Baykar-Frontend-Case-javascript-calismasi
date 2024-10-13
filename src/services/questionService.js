export const fetchQuestions = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data.slice(0, 10);
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}