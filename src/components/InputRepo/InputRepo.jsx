import { useState } from "react";
import "./InputRepo.css";

export default function InputRepo(props) {
  const [inputRepo, setInputRepo] = useState("");
  const findRepo = () => {
    props.handleClick(inputRepo);
  };
  return (
    <>
      <div className="c-inputrepo">
        <input
          className="c-inputrepo__input"
          value={inputRepo}
          onChange={(e) => setInputRepo(e.target.value)}
        ></input>
        <button onClick={findRepo}>Search</button>
      </div>
    </>
  );
}
