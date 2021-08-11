import Header from './component/Header/Header'
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Articles from './component/Articles/Articles';
import Insert from './component/Insert/Insert';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Articles />
      <Insert />
    </div>
  );
}

export default App;
