import AppLayout from "../componentes/AppLayout";
import Container from "react-bootstrap/Container";
import CarouselBanner from "../componentes/CarouselBanner/CarouselBanner";
import OfertasDelDia from "../componentes/Promotions/OfertasDelDia";
import GangaDelDia from '../componentes/Promotions/GangaDelDia';
import AllItems from '../componentes/Promotions/AllItems';
import Image from "next/image";
const Home = ({ products, addInterest }) => {
  return (
    <AppLayout>
      <Container className="container-ganga box-home fade-in animated">
        <CarouselBanner />
        <OfertasDelDia />
        <GangaDelDia />
        <figure className="m-0 w-100">
            <Image
              src="/images/banner/banner-bottom.png"
              alt="banner"
              // layout="fill"
              width={1500}
              height={400}
              //   layout="responsive"
            />
        </figure>
         <AllItems products={products}/>
      </Container>
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
