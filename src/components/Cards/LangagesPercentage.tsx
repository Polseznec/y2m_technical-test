import React, { useEffect, useState } from "react";

function LangagesPercentage({ data }) {
  const [langData, setLangData] = useState([]);

  useEffect(() => {
    fetch(data.languages_url)
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
      <span>
        {key} : {value}
      </span>
    );
  });

  return (
    <div>
      <span>Langue utilisé</span>
      <div>{langMapping}</div>
    </div>
  );
}

export default LangagesPercentage;
