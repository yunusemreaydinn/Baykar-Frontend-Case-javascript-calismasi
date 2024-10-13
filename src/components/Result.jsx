import React from 'react'

const Result = ({testAnswers}) => {
  return (
    <div className="w-full p-5">
            <h2 className="text-xl font-bold">Sonuçlar</h2>
            <table className="min-w-full mt-4 border border-collapse border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300">Soru</th>
                        <th className="border border-gray-300">Doğru cevap</th>
                        <th className="border border-gray-300">Verilen cevap</th>
                    </tr>
                </thead>
                <tbody>
                    {testAnswers.map((item, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300">{item.question}</td>
                            <td className="border border-gray-300">{item.correctAnswer}</td>
                            <td className="border border-gray-300">{item.userAnswer == "" ? "Boş geçildi" : item.userAnswer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Result