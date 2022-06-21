import './App.css';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Cards
        word={"Pneumonoultramicroscopicsilicovolcanoconiosis"}
        meaning={"a lung disease caused by the inhalation of silica or quartz dust."}/>
      </div>
    </div>
  );
}

export default App;
