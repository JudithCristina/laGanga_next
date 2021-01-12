import Footer from "./../Footer";
import Header from "./../Header/Header";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
