import Header from './component/Header/Header'
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Articles from './component/Articles/Articles';
import Insert from './component/Insert/Insert';
import Leader from './component/Leader/Leader';
import Desc from './component/Desc/Desc';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Articles />
      <Insert />
      <Leader />
      <Desc />
    </div>
  );
}

export default App;
