import { useEffect, useState } from "react";
import "./SearchRepo.css";

export default function SearchRepo(props) {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    if (props.inputFind) {
      fetch(`https://api.github.com/users/${props.inputFind}`)
        .then((response) => response.json())
        .then((podaci) => setRepoData(podaci))
        .catch((error) => console.error(error));
    }
  }, [props.inputFind]);
  if (!repoData) {
    return <p>Loading..</p>;
  }
  return (
    <>
      <form>
        <div>
          <div className="c-searchrepo__profile">
            <img src={repoData.avatar_url} width={100}></img>
            <h1>{repoData.name}</h1>
          </div>
          <p>BIO: {repoData.bio}</p>
          <p>LOCATION: {repoData.location}</p>
        </div>
      </form>
    </>
  );
}
