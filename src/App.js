import Header from './component/Header/Header'
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Articles from './component/Articles/Articles';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Articles />
    </div>
  );
}

export default App;
