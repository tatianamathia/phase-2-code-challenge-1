
import './App.css';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Add from "./components/add/Add"
import Table from './components/table/Table';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div>
      <Search onSearch={handleSearch} /> {/* Optional prop for future expansion */}
      <Table />
      </div>

      <Header />
      <Search />
      <Add />
      <Table />


    </div>
  );
}

export default App;
