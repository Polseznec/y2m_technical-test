import styles from "../../../styles/Card/RepoCard.module.scss";
import LangagesPercentage from "./LangagesPercentage";

export default function RepoCard({ repo }) {
  // console.log(repo);

  return (
    <div className={styles.cardContainer}>
      <a href={repo.html_url} target="_blank">
        <span>{repo.full_name}</span>
      </a>
      <br />
      <span>Stars : {repo.stargazers_count}</span>
      <br />
      <span>Watchers : {repo.watchers}</span>
      <br />
      <span>Nombre d'issues ouvertes : {repo.open_issues_count}</span>
      <br />
      <LangagesPercentage data={repo} />
      <br />
    </div>
  );
}
