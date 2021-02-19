import AppLayout from "../componentes/AppLayout";
import Container from "react-bootstrap/Container";
import CarouselBanner from "../componentes/CarouselBanner/CarouselBanner";
import OfertasDelDia from "../componentes/Promotions/OfertasDelDia";
import GangaDelDia from '../componentes/Promotions/GangaDelDia';
import AllItems from '../componentes/Promotions/AllItems';
import Image from "next/image";
import Head from "next/head";
const Home = ({
  products,
  addInterest,
  bannerImage,
  width,
  isLoading,
  deleteInterest,
  height,
}) => {
  return (
    <>
      <Head>
        <title>La Ganga - Home</title>
        <link rel="icon" type="image/x-icon" href="/yesmom-favicon.png" />
        <meta name="description" content="La Ganga es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ganga - Home" />
        <meta
          property="og:description"
          content="La Ganga es una plataforma digital peruana ..."
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://scontent.flim16-2.fna.fbcdn.net/v/t1.0-9/126792131_106928704587510_2836457564050845211_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFSSfa6-XY6Gr86bM0YLSnbg75GzBA7YvSDvkbMEDti9CbHT_bhgekVd4r0lJtcFek&_nc_ohc=WbH5Z7RjRSEAX_W02AR&_nc_ht=scontent.flim16-2.fna&oh=c348092596513f52dfca119589ab6c0b&oe=602D60C9"
        />
        <meta property="og:site_name" content="La Ganga" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="La Ganga - Home" />
        <meta
          name="twitter:description"
          content="La Ganga es una plataforma digital peruana ..."
        />
        <meta
          name="twitter:image"
          content="https://scontent.flim16-2.fna.fbcdn.net/v/t1.0-9/126792131_106928704587510_2836457564050845211_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFSSfa6-XY6Gr86bM0YLSnbg75GzBA7YvSDvkbMEDti9CbHT_bhgekVd4r0lJtcFek&_nc_ohc=WbH5Z7RjRSEAX_W02AR&_nc_ht=scontent.flim16-2.fna&oh=c348092596513f52dfca119589ab6c0b&oe=602D60C9"
        />
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <AppLayout>
        <Container className="container-ganga box-home fade-in animated">
          <CarouselBanner bannerImage={bannerImage} />
          <OfertasDelDia
            addInterest={addInterest}
            deleteInterest={deleteInterest}
            width={width}
            height={height}
          />
          <GangaDelDia
            addInterest={addInterest}
            deleteInterest={deleteInterest}
            width={width}
            height={height}
          />
          <figure className="m-0 w-100">
            <Image
              src="/images/banner/banner-bottom.png"
              alt="banner"
              // layout="fill"
              width={1800}
              height={500}
              //   layout="responsive"
            />
          </figure>
          <AllItems
            products={products}
            addInterest={addInterest}
            deleteInterest={deleteInterest}
            width={width}
            height={height}
            isLoading={isLoading}
          />
        </Container>
      </AppLayout>
    </>
  );
};

export async function getServerSideProps(params) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const routerParams = params;
  console.log(routerParams);
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/banner/get-all/user`;
  const res = await fetch(url);

  const bannerImage = await res.json();
  if (!bannerImage) {
    return {
      notFound: true,
    };
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      bannerImage: bannerImage,
    },
  };
}

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
