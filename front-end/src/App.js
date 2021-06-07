import './App.scss';
import Navigation from './components/navigation/Navigation'
import HomePage from './pages/homepage/HomePage'

function App() {
  return (
    <div className="application-wrapper">
      <div className="container">
        <Navigation />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
