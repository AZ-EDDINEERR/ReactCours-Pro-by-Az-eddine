import { Provider } from "react-redux";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./component/Home";
import store from "./store";
import Cours from "./component/Courses";
import CoursDetail from "./component/CoursesDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/footer";
import Contact from "./component/Contact";
import Header from "./component/header";
import Exercice from "./component/QCM";
import UserProfile from "./profile/UserProfile";
import CoursReact from "./exercicePratique/Exercice";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<> <Header /><Home /><Footer /></>} />
          <Route path="/cours" element={<> <Header /><Cours /><Footer /></>} />
          <Route path="/coursD" element={<> <Header /><CoursDetail /><Footer /></>} />
          <Route path="/QCM" element={<> <Header /><Exercice /><Footer /></>} />
          <Route path="/exercice" element={<> <Header /><CoursReact /><Footer /></>} />
          <Route path="/contact" element={<> <Header /><Contact /><Footer /></>} />
          <Route path="/Profil" element={<> <Header /><UserProfile /><Footer /></>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
