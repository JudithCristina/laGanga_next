import AppLayout from "../componentes/AppLayout";
const Home = () => {
  return (
    <AppLayout>
      <p>Hola Isaac</p>
    </AppLayout>
  );
};

// export async function getServerSideProps() {
//   console.log("holitass")
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion-all/user`
//   console.log(url, "urli")
//   const res = await fetch(
//     url
//   );
//   const promotionsData = await res.json();
//   if (!promotionsData) {
//     return {
//       notFound: true,
//     };
//   }
//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       promotionsData,
//     },
//   };
// }


export default Home;
