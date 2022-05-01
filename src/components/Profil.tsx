import React from "react";
import styles from "../../styles/Home.module.scss";
import stylesContainer from "../../styles/Container/ProfilContainer.module.scss";
import Repos from "./Repos";

import Loader from "./Ui/Loader";
import { userList, profilList } from "../Types/Props";
export default function Profil({
  data,
  isLoading,
}: {
  data: any;
  isLoading: Boolean;
}) {
  const profil: profilList = data[0].profil;
  const user: userList = data[1].session.user;
  const apiError: Number = Object.keys(profil).length;

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
                  <a href={profil.html_url}>@{profil.login} </a>
                </span>
                <span>{user.email}</span>
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
