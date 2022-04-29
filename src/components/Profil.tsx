import React from "react";
import styles from "../../styles/Home.module.scss";
import stylesContainer from "../../styles/Container/ProfileContainer.module.scss";
import Repos from "./Repos";

import Loader from "./Ui/Loader";

export default function Profil({ data, isLoading }) {
  const profil = data[0].profil;
  const session = data[1].session.user;
  const apiError = Object.keys(profil).length;
  console.log("profil", profil);
  console.log("session", session);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : apiError > 2 ? (
        <>
          <div className={stylesContainer.profileContainer}>
            <div>
              <img className={styles.avatar} src={profil.avatar_url} />
              <div>
                <span>
                  <a>@{profil.login} </a>
                </span>
                <span>{session.email}</span>
                <div>
                  <p>"{profil.bio}"</p>
                </div>
              </div>
            </div>
          </div>
          <Repos profil={profil} />
        </>
      ) : (
        <div className={styles.home_card}>
          <p>😳</p>
          <h1>Hum...</h1>
          <h1>il y a un problème</h1>
          <span>To many api call ...</span>
          <span>Please, Try later </span>
        </div>
      )}
    </>
  );
}
