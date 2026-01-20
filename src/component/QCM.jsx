import { useEffect, useState } from "react";
import Data from "../Data/exercice.json";

export default function Exercice() {
  const data = Data;
  const [listeId, setListeId] = useState([]);
  const [time, setTime] = useState(600); // 10 minutes
  const [isFinished, setIsFinished] = useState(false); // nouvel état pour valider examen

  // Timer
  useEffect(() => {
    if (time === 0) setIsFinished(true); // Fin du timer = fin examen
    if (time === 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  // Sélection réponse
  const handleCheked = (coursId, questionId, optionIndex) => {
    if (isFinished || time === 0) return; // Bloque si fini
    setListeId((prev) => [
      ...prev.filter((item) => item.coursId !== coursId || item.id !== questionId),
      { coursId, id: questionId, i: optionIndex },
    ]);
  };

  // Calcul du score
  const totalQuestions = data.reduce((acc, c) => acc + c.questions.length, 0);
  const score = listeId.filter((rep) => {
    const cours = data.find((c) => c.coursId === rep.coursId);
    const question = cours.questions.find((q) => q.id === rep.id);
    return question.answer === rep.i;
  }).length;

  // Bouton Valider
  const handleFinish = () => setIsFinished(true);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-info mb-4">Examen d'apprentissage</h1>

      {/* Timer */}
      <h4 className="text-center text-danger mb-3">
        Temps restant : {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </h4>

      {/* Score */}
      {isFinished && (
        <h3 className="text-center text-success mb-4">
          Score final : {score} / {totalQuestions}
        </h3>
      )}

      {/* Bouton Valider */}
      {!isFinished && (
        <div className="text-center mb-4">
          <button className="btn btn-primary" onClick={handleFinish}>
            Valider tout l'examen
          </button>
        </div>
      )}

      {/* Questions */}
      {data.map((cours) =>
        cours.questions.map((question) => (
          <div key={`${cours.coursId}_${question.id}`} className="row justify-content-center my-4">
            {/* QUESTION */}
            <div className="question border col-12 col-md-5 text-center py-4 mb-3 mb-md-0">
              <h5>{question.question}</h5>
            </div>

            {/* REPONSES */}
            <div className="reponse col-12 col-md-6">
              <ul className="list-group">
                <div className="border p-3">
                  {question.options.map((option, i) => {
                    const isSelected = listeId.some(
                      (u) =>
                        u.coursId === cours.coursId &&
                        u.id === question.id &&
                        u.i === question.answer &&
                        u.i === i
                    );

                    const isFalse = listeId.some(
                      (u) =>
                        u.coursId === cours.coursId &&
                        u.id === question.id &&
                        u.i === i
                    );

                    return (
                      <li
                        key={i}
                        className={`list-group-item ${
                          isSelected
                            ? "list-group-item-success"
                            : isFalse
                            ? "list-group-item-danger"
                            : "list-group-item-light"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q_${cours.coursId}_${question.id}`}
                          disabled={
                            isFinished ||
                            time === 0 ||
                            listeId.some(
                              (e) => e.coursId === cours.coursId && e.id === question.id
                            )
                          }
                          onChange={() => handleCheked(cours.coursId, question.id, i)}
                        />
                        <span className="ms-2">{option}</span>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
