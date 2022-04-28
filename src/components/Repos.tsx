import React, { useEffect, useState } from "react";
import styles from "../../styles/Container/ReposContainer.module.scss";
import RepoCard from "./Cards/RepoCard";

export default function Repos({ profil }) {
  const [repos, setRepos] = useState([]);
  console.log("repos", repos.message);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profil.login}/repos`)
      .then((res) => res.json())
      .then(setRepos);
  }, [profil]);

  return (
    <div className={styles.ReposContainer}>
      <>
        {repos.map((repo, key) => (
          <RepoCard repo={repo} key={key} />
        ))}
      </>
    </div>
  );
}
