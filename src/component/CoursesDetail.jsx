import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CoursesDetail() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const selectedId = useSelector(state => state?.ids);

  /* Synchronisation avec Redux */
  useEffect(() => {
    if (selectedId) {
      setId(Number(selectedId));
    }
  }, [selectedId]);

  /* Chargement des cours */
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/c3b5e065-d355-4cd3-8fa9-284ec963fabc")
      .then(res => setData(res.data.Data))
      .catch(err => console.error(err));
  }, []);

  /* Fin des cours */
  useEffect(() => {
    if (data.length > 0 && id >= data.length) {
      setShowModal(true);
    }
  }, [id, data.length]);

  const handleAdvanced = () => {
    setId(prev => prev + 1);
  };

  const radius = 20;
  const currentCourse = data.find(c => c.id === id);
  const progress =
    data.length > 0 ? Math.min((id / data.length) * 100, 100) : 0;

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      {/* RETOUR */}
      <Link to="/cours">
        <button className="btn btn-info mb-3">
          <i className="bi bi-arrow-left"></i> Retour
        </button>
      </Link>

      {data.length === 0 ? (
        <p>Chargement...</p>
      ) : currentCourse ? (
        <>
          {/* PROGRESSION */}
          <div className="d-flex justify-content-center align-items-center mb-4 flex-column">
            <svg width="120" height="120">
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#e9ecef"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#0d6efd"
                strokeWidth="6"
                fill="none"
                strokeDasharray={2 * Math.PI * radius}
                strokeDashoffset={(1 - progress / 100) * 2 * Math.PI * radius}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
              />
              <text
                x="60"
                y="65"
                textAnchor="middle"
                fontSize="14"
                fill="#000"
                fontWeight="bold"
              >
                {Math.round(progress)}%
              </text>
            </svg>
            <span className="fw-bold mt-2">
              {Math.round(progress)}% de progression
            </span>
          </div>

          {/* VIDEO + CONTENU */}
          <div className="border rounded py-3 px-3 mx-1 my-3">
            <div className="row align-items-start">
              {/* VIDEO */}
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={currentCourse.video}
                    title={currentCourse.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>
              </div>

              {/* CONTENU */}
              <div className="col-12 col-md-6">
                <h4 className="text-info">{currentCourse.title}</h4>
                <p className="text-muted">{currentCourse.description}</p>
                <p>{currentCourse.content}</p>

                <h5 className="text-info">Exemple</h5>
                <p>{currentCourse.example}</p>
              </div>
            </div>
          </div>

          {/* BOUTON SUIVANT */}
          {id < data.length && (
            <button className="btn btn-info my-3" onClick={handleAdvanced}>
              Suivant ({id})
            </button>
          )}
        </>
      ) : (
        <p>Chargement du cours...</p>
      )}

      {/* MODAL FIN */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Félicitations</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>Vous avez terminé tous les cours.</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
