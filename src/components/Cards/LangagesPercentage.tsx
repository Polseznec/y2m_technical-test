import React, { useEffect, useState } from "react";

function LangagesPercentage({ data }) {
  const [langData, setLangData] = useState([]);

  console.log("from langPerCent", data);

  useEffect(() => {
    fetch(data.languages_url)
      .then((res) => res.json())
      .then(setLangData);
  }, []);

  console.log(langData);

  return <div>Langages</div>;
}

export default LangagesPercentage;
