import React from "react";
import styles from "../../../styles/Home.module.scss";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

//components
import { Button } from "../Ui/Buttons";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <footer className={styles.footer}>
      {session && (
        <Button
          onClick={() => {
            signOut();
          }}
          text={`Sign out ${session.user.name}`}
        />
      )}
    </footer>
  );
};

export default Footer;
