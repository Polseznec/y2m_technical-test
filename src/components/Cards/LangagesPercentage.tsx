import React, { useEffect, useState } from "react";
//style
import styles from "../../../styles/Card/LangCard.module.scss";
//type
import { repoList } from "../../Types/Props";

function LangagesPercentage({ repo }: { repo: repoList }) {
  const [langData, setLangData] = useState([]);

  useEffect(() => {
    fetch(repo.languages_url)
      .then((res) => res.json())
      .then(setLangData);
  }, []);

  const lang = [langData];

  const doPerCents = lang.map((lang) => {
    const langCopy = { ...lang };
    const objkeys = Object.keys(langCopy);
    const result = objkeys.reduce((result, key) => result + langCopy[key], 0);
    objkeys.forEach(
      (key) => (langCopy[key] = Math.round((100 * langCopy[key]) / result))
    );
    return langCopy;
  });

  const getLangInPerCent = doPerCents[0];

  const langMapping = Object.entries(getLangInPerCent).map(([key, value]) => {
    return (
      <p>
        {key} : {value}%
      </p>
    );
  });

  return (
    <div className={styles.langContainer}>
      <span>Technologie</span>
      <span>{langMapping}</span>
    </div>
  );
}

export default LangagesPercentage;
