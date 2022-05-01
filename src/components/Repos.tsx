import React, { useEffect, useState } from "react";
import styles from "../../styles/Container/ReposContainer.module.scss";
import RepoCard from "./Cards/RepoCard";
//type
import { profilList } from "../Types/Props";

export default function Repos({ profil }: { profil: profilList }) {
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profil.login}/repos`)
      .then((res) => res.json())
      .then(setRepos);
  }, [profil]);

  return (
    <div className={styles.ReposContainer}>
      <>
        {repos.map((repo: object, key: number) => (
          <RepoCard repo={repo} key={key} />
        ))}
      </>
    </div>
  );
}
