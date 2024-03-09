import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import HomeForm from "./Components/Home/HomeForm";
import ProtectedRoute from '../src/Components/RouteManage/ProtectedRoute';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <ProtectedRoute path="/" element={<HomeForm />} />
    </Routes>
  </Router>
  );
}

export default App;
