import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import CodingAnimation from '../animation/Coding.json';

export default function Home() {
    return (
        <>
            <div className="container">

                <main
                    className="row align-items-center justify-content-center mt-5"
                    style={{ minHeight: "400px" }}
                >

                    {/* TEXTE */}
                    <div className="col-12 col-md-6 border p-5 text-center shadow rounded mb-4 mb-md-0">
                        <h1 className="text-info">
                            Apprenez React.js <span className="text-info">comme un Pro</span>
                        </h1>
                        <p className="text-dark mt-3">
                            Des cours de qualité pour maitriser React.js, de débutant à expert
                        </p>
                        <Link to="/cours">
                            <button className="btn btn-outline-info mt-3">
                                Explorer les cours
                            </button>
                        </Link>
                    </div>

                    {/* ANIMATION */}
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div style={{ maxWidth: "400px", width: "100%" }}>
                            <Lottie animationData={CodingAnimation} />
                        </div>
                    </div>

                </main>

            </div>
        </>
    );
}
