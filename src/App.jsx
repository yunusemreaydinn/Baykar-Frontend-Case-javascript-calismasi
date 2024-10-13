import { useState } from "react";
import Quiz from "./components/Quiz"

function App() {

  const [isFirstTime, setIsFirstTime] = useState(true);

  return (
    <>
    <Quiz />
    </>
  )
}

export default App
