import Head from "next/head";
import { useEffect, useState } from "react";
//import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useSession, signIn } from "next-auth/react";
//components
import Footer from "../src/components/Navigation/Footer";
import Profil from "../src/components/Profil";
import Loader from "../src/components/Ui/Loader";
import { Button } from "../src/components/Ui/Buttons";

function Home() {
  const { data: session } = useSession();
  const [profil, setProfil] = useState({});
  const GIT_HUB_DATA = [{ profil: profil }, { session: session }];
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    await fetch(`https://api.github.com/search/users?q=${session.user.email}`)
      .then((res) => res.json())
      .then((data) =>
        fetch(`https://api.github.com/users/${data.items[0].login}`)
      )
      .then((res) => res.json())
      .then(setProfil);
    setLoading(false);
  };

  useEffect(() => {
    if (session) {
      getData();
    }
  }, [session]);

  console.log("GIT_HUB_DATA", GIT_HUB_DATA);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            <div>
              <span>Connection via Github</span>
            </div>
            <Button
              onClick={() => {
                signIn();
              }}
              text={"Sign In with Github"}
            />
          </>
        )}
        {session && <Profil data={GIT_HUB_DATA} isLoading={isLoading} />}
      </main>
      <Footer />
    </div>
  );
}

export default Home;