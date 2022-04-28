function ProfilPage() {
  return <main>Profil Page</main>;
}

// export async function getStatticProps({ params }) {
//   const profil = await fetch(
//     `https://api.github.com/search/users?q=${session.user.email}`
//   ).then((res) => res.json());

//   return { props: { profil } };
// }

export default ProfilPage;
