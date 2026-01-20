import React, { useState } from "react";
import ExerciceInteractif from "./ExerciceInteractif";
import DataEX from "../Data/exercicePratique.json";

const CoursReact = () => {
  const data = DataEX;
  const [index, setIndex] = useState(0);

  const exerciceActuel = data[index]; // initialisation automatique

  if (!exerciceActuel) {
    return <p>Chargement des exercices...</p>;
  }

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < data.length - 1) setIndex(index + 1);
    else alert("Les exercices sont terminés !");
  };

  return (
    <div className="container my-4">
      <h2>{exerciceActuel.titre}</h2>
      <p>{exerciceActuel.description}</p>

      <ExerciceInteractif
        codeInitial={exerciceActuel.codeInitial}
        correction={exerciceActuel.correction}
      />

      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}
      >
        <button
          onClick={handlePrevious}
          className="btn btn-info"
          disabled={index === 0}
        >
          {"<"} Previous
        </button>

        <button
          onClick={handleNext}
          className="btn btn-info"
          disabled={index === data.length - 1}
        >
          Next {">"}
        </button>
      </div>

      <p className="text-center mt-2">
        Exercice {index + 1} sur {data.length}
      </p>
    </div>
  );
};

export default CoursReact;
