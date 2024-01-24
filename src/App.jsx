import { useState } from "react";
import "./App.css";
import InputRepo from "./components/InputRepo/InputRepo";
import SearchRepo from "./components/SearchRepo/Searchrepo";
import RepoDetails from "./components/RepoDetails/RepoDetails";

function App() {
  const [inputFind, setInputFind] = useState();

  const handleClick = (inputFind) => {
    setInputFind(inputFind);
  };
  return (
    <div className="c-app">
      <InputRepo handleClick={handleClick}></InputRepo>
      <SearchRepo inputFind={inputFind}></SearchRepo>
      <RepoDetails inputFind={inputFind}></RepoDetails>
    </div>
  );
}

export default App;
