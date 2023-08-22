import './App.css';
import TermsPage from './TermsPage';

function App() {
  return (
    <div className="App">
      {/* Can add a NavBar with different modes: 1 displaying all data, 1 allowing you to choose which data goes in the front and other 2 in the back as well as jumbling the order of the cards, and 1 can be a drag and drop quiz */}
      <TermsPage />
    </div>
  );
}

export default App;
