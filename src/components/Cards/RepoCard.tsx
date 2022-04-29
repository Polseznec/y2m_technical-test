import styles from "../../../styles/Card/RepoCard.module.scss";
import LangagesPercentage from "./LangagesPercentage";

export default function RepoCard({ repo }) {
  // console.log(repo);

  return (
    <div className={styles.cardContainer}>
      <a href={repo.html_url} target="_blank">
        <span>{repo.full_name}</span>
      </a>
      <div>
        <div>
          <span>
            Stars : <p>{repo.stargazers_count}</p>
          </span>
          <span>
            Watchers :<p>{repo.watchers}</p>
          </span>
        </div>
        <div>
          <span>
            Nombre d'issues ouvertes : <p>{repo.open_issues_count}</p>
          </span>
        </div>
      </div>
      <LangagesPercentage data={repo} />
    </div>
  );
}
