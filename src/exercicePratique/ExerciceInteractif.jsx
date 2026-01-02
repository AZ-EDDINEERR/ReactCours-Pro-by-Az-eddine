// src/components/ExerciceInteractif.jsx
import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import ResultViewer from "./ResultViewer";

const ExerciceInteractif = ({ codeInitial, correction }) => {
  const [code, setCode] = useState(codeInitial);
  const [afficherCorrection, setAfficherCorrection] = useState(false);
  const editorRef = useRef(null);

  // Gérer le changement dans l'éditeur
  const handleEditorChange = (value) => {
    setCode(value);
  };

  // Fix ResizeObserver + afficher l'éditeur correctement
  useEffect(() => {
    const timer = setTimeout(() => {
      editorRef.current?.layout();
    }, 100);

    const handleResize = () => {
      editorRef.current?.layout();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mettre à jour le code affiché si l'utilisateur active la correction
  useEffect(() => {
    if (afficherCorrection) {
      setCode(correction);
    } else {
      setCode(codeInitial);
    }
  }, [afficherCorrection, codeInitial, correction]);

  return (
    <div className="d-flex flex-column flex-md-row" style={{ height: "80vh", minHeight: "400px" }}>
      {/* ÉDITEUR */}
      <div
        className="flex-fill border-md-end"
        style={{ minHeight: "200px", borderRight: "1px solid #ccc" }}
      >
        <div className="d-flex justify-content-between align-items-center p-2">
          <h3 className="m-0">Éditeur de Code</h3>
          <button
            className="btn btn-sm btn-outline-info"
            onClick={() => setAfficherCorrection(!afficherCorrection)}
          >
            {afficherCorrection ? "Masquer Correction" : "Afficher Correction"}
          </button>
        </div>
        <div style={{ height: "calc(100% - 50px)" }}>
          <Editor
            height="100%"
            defaultLanguage="javascript"
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
            onMount={(editor) => (editorRef.current = editor)}
            options={{
              automaticLayout: false,
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>
      </div>

      {/* RÉSULTAT */}
      <div className="flex-fill p-2" style={{ minHeight: "200px" }}>
        <h3>Résultat</h3>
        <div className="h-90">
          <ResultViewer code={code} />
        </div>
      </div>
    </div>
  );
};

export default ExerciceInteractif;
