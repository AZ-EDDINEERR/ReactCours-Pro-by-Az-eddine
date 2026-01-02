import React, { useState, useEffect } from "react";
import ExerciceInteractif from "./ExerciceInteractif";
import axios from "axios";

const CoursReact = () => {
    const [data, setData] = useState([]);
    const [exerciceActuel, setExerciceActuel] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        axios
            .get("https://mocki.io/v1/f0a06b10-d269-40ac-8d2a-aebd8fd1d3b4")
            .then((response) => {
                setData(response.data);
                // On initialise le premier exercice après le chargement
                if (response.data.length > 0) {
                    setExerciceActuel(response.data[0]);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement des exercices:", error));
    }, []);

    if (!exerciceActuel) {
        return <p>Chargement des exercices...</p>;
    }

    return (
        <div>
            <h2>{exerciceActuel.titre}</h2>
            <p>{exerciceActuel.description}</p>

            {/* Passer le codeInitial et la correction à ton éditeur */}
            <ExerciceInteractif
                codeInitial={exerciceActuel.codeInitial}
                correction={exerciceActuel.correction}
            />

            <div style={{ marginTop: "20px" , display:'flex', justifyContent:'space-between' }} 
            className="container">
                <button
                    onClick={() => {
                        setIndex(Number(index) - 1)
                        setExerciceActuel(data[index])
                    }}
                    className="btn btn-info m-4"
                >
                    {'<'} Previous 
                </button>

                <button
                    key={index}
                    onClick={() => {
                        setIndex(Number(index) + 1)
                        setExerciceActuel(data[index])
                    }}
                    className="btn btn-info m-4"
                >
                    next {'>'}
                </button>
            </div>

            {index > 20 ? (
                alert('les exercice se terminé'),
                setIndex(1)) : ''}
        </div>

    );
};

export default CoursReact;
