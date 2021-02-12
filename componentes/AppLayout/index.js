import Footer from "./../Footer";
import Header from "./../Header/Header";
import FilterCategory from "./../FilterCategory/FilterCategory"
import HeaderNuevo from "../Header/HeaderNuevo";

const AppLayout = ({ children, promotionsData }) => {
  return (
    <div>
      {/* <Header  promotionsData={ promotionsData } ></Header> */}
      <HeaderNuevo promotionsData={ promotionsData } ></HeaderNuevo>
      <FilterCategory/>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
