import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import NoteListPage from "./containers/NoteListPage";
import NotePage from "./containers/NotePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/notes" exact component={NoteListPage} />
        <Route path="/note/:id" component={NotePage} />
      </Routes>
    </Router>
  );
}

export default App;
