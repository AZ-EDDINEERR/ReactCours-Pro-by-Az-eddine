import { useDispatch } from "react-redux";
import Data from "../Data";
import { Link } from "react-router-dom";
import { Rid } from "../redux/action";

export default function Cours() {
  const disptch = useDispatch();

  return (
    <>
      <Link to="/" className="btn btn-info mx-3">
        &#8592; Retour
      </Link>
      <div className="container mt-5">
        <div className="row gy-4 justify-content-center">

          {Data.map((p) => (
            <div
              key={p.id}
              className="col-12 col-md-4 d-flex align-items-stretch"
            >
              <section className="card p-2 w-100 d-flex flex-column">

                <div className="text-center">

                  {/* VIDEO */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={p.video}
                      title={p.titre}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="card-image rounded"
                    ></iframe>
                  </div>

                  <div className="d-flex justify-content-end mt-2">
                    <span className="badge bg-info">{p.niveau}</span>
                  </div>

                  {/* TITRE */}
                  <h3 className="card-title mt-2">{p.titre}</h3>

                  {/* DESCRIPTION + BUTTON */}
                  <div className="text-center mt-auto">
                    <p className="card-subtitle">{p.description}</p>

                    <Link to="/coursD">
                      <button
                        onClick={() => disptch(Rid(p.id))}
                        className="btn btn-outline-info mt-3"
                      >
                        Voir Détails
                      </button>
                    </Link>
                  </div>

                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
