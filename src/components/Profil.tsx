import React from "react";
import styles from "../../styles/Home.module.scss";
import stylesContainer from "../../styles/Container/ProfileContainer.module.scss";
import Repos from "./Repos";

import Loader from "./Ui/Loader";

export default function Profil({ data, isLoading }) {
  const profil = data[0].profil;
  const session = data[1].session.user;
  const apiError = Object.keys(profil).length;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : apiError > 2 ? (
        <>
          <div className={stylesContainer.profileContainer}>
            <span>profil</span>
            <div>
              <img className={styles.avatar} src={profil.avatar_url} />
              <br />
              <span>{profil.login}</span>
              <br />
              <span>{session.email}</span>
              <br />
              <span>{profil.bio}</span>
            </div>
          </div>
          <Repos profil={profil} />
        </>
      ) : (
        <>
          <span>To many api call ...</span>
          <br />
          <span>Please, Try later </span>
        </>
      )}
    </>
  );
}
