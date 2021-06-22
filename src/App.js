import UserResultsContainer from "./components/UserResultsContainer.js";
import Search from "./components/Search/Search.js";
import Header from "./components/Header/Header.js";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <UserResultsContainer />
    </div>
  );
}

export default App;
