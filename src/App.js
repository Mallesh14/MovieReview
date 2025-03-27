import './App.css';
import FeedBackForm from './components/FeedBackForm';
import ReviewList from './components/ReviewList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/feedback">Give Feedback</Link> | {" "}
        <Link to="/reviews">View Reviews</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/feedback" />} />
        <Route path="/feedback" element={<FeedBackForm />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </Router>
  );
}
export default App;