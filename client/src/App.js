import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationPage from './pages/RegistrationPage';
import PasswordResetPage from './pages/PasswordResetPage'; // Import PasswordResetPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} /> {/* Add PasswordResetPage route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;