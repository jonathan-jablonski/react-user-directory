import UserResultsContainer from "./components/UserResultsContainer/UserResultsContainer.js";
import Search from "./components/Search/Search.js";
import Header from "./components/Header/Header.js";
import "./App.css";

function App() {
  return (
    <div className="webpage">
      <Header />
      <UserResultsContainer />
    </div>
  );
}

export default App;
