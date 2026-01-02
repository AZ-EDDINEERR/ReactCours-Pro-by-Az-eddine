import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-light text-dark pt-4">
      <div className="container">

        {/* Contenu principal */}
        <div className="row">

          {/* À propos */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3>Az-eddine Errahmaoui</h3>
            <p>
              Développeur web & passionné de React. Création de sites performants et modernes.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="col-12 col-md-6">
            <h3>Réseaux sociaux</h3>
            <div className="d-flex flex-column flex-md-row gap-3 mt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="d-flex align-items-center text-dark text-decoration-none">
                <FaGithub style={{ color: "#010408ff", fontSize: "24px" }} className="me-2" /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/az-eddine-errahmaoui-672759376" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-dark text-decoration-none">
                <FaLinkedin style={{ color: "#0A66C2", fontSize: "24px" }} className="me-2" /> Linkedin
              </a>

              <a href="https://twitter.com/devAzeddine" target="_blank" rel="noreferrer" className="d-flex align-items-center text-dark text-decoration-none">
                <FaTwitter style={{ color: "#0edbffff", fontSize: "24px" }} className="me-2" /> Twitter
              </a>
            </div>
          </div>

        </div>

        {/* Footer bas */}
        <div className="footer-bottom text-center mt-4">
          <p>© {new Date().getFullYear()} Az-eddine Errahmaoui. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}
