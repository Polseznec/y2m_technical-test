import React from "react";
import styles from "../../../styles/Home.module.scss";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

//components
import { ButtonSecondary } from "../Ui/Buttons";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <footer className={styles.footer}>
      {session && (
        <ButtonSecondary
          onClick={() => {
            signOut();
          }}
          text={`Log out 🖖`}
        />
      )}
    </footer>
  );
};

export default Footer;
