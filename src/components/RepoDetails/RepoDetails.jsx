import { useState } from "react";
import { useEffect } from "react";
import "./RepoDetails.css";

export default function RepoDetails(props) {
  const [repoDetails, setRepoDetails] = useState([]);

  useEffect(() => {
    if (props.inputFind) {
      fetch(`https://api.github.com/users/${props.inputFind}/repos`)
        .then((response) => response.json())
        .then((data) => setRepoDetails(data))
        .catch((error) => console.error(error));
    }
  }, [props.inputFind]);

  return (
    <>
      <div>
        <ul>
          {repoDetails &&
            repoDetails.map((d) => (
              <li className="c-repodetails__list" key={d.id}>
                {d.name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
