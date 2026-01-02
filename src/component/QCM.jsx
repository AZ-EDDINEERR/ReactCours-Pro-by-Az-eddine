import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Exercice() {
    const [data, setData] = useState([])
    const [listeId, setListeId] = useState([])

    useEffect(() => {
        axios
            .get('https://mocki.io/v1/9e29b21e-407c-4fc4-963d-1531ae4256c7')
            .then(rep => setData(rep.data))
    }, [])

    const handleCheked = (coursId, questionId, optionIndex) => {
        setListeId(prev =>
            [
                ...prev.filter(item => item.coursId !== coursId || item.id !== questionId),
                { coursId, id: questionId, i: optionIndex }
            ]
        )
    }
    return (
        <div className='container mt-5'>
            <h1 className='text-center text-info mb-4'>Examen d'apprentissage</h1>

            {data.map(cours =>
                cours.questions.map(question => (
                    <div key={question.id} className='row justify-content-center my-4'>

                        {/* QUESTION */}
                        <div className="question border col-12 col-md-5 text-center py-4 mb-3 mb-md-0">
                            <h2>{question.question}</h2>
                        </div>

                        {/* REPONSES */}
                        <div className='reponse col-12 col-md-6'>
                            <ul className="list-group">
                                <div className="border p-3">

                                    {question.options.map((option, i) => {

                                        const isSelected = () => listeId.some(
                                            u =>
                                                u.coursId === cours.coursId &&
                                                u.id === question.id &&
                                                u.i === question.answer &&
                                                u.i === i
                                        )

                                        const isFalse = () => listeId.some(
                                            u =>
                                                u.coursId === cours.coursId &&
                                                u.id === question.id &&
                                                u.i === i
                                        )
                                        return (
                                            <li
                                                key={i}
                                                className={`list-group-item ${isSelected()
                                                    ? "list-group-item-success "
                                                    : isFalse()
                                                        ? "list-group-item-danger"
                                                        : "list-group-item-light"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`q_${cours.coursId}_${question.id}`}
                                                    disabled={listeId.some(e =>
                                                        e.coursId === cours.coursId &&
                                                        e.id === question.id
                                                    )}
                                                    onChange={() => handleCheked(cours.coursId, question.id, i)}
                                                />
                                                <span className="ms-2">
                                                    {option}
                                                </span>
                                            </li>

                                        )
                                    })}

                                </div>
                            </ul>
                        </div>

                    </div>
                ))
            )}
        </div>
    )
}
