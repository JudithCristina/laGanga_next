import { styleBackdrop } from "./style";

const Backdrop = (props) => {

    console.log("aqui estoy");
  return (
    <>
      <div className="backdrop" onClick={props.ocultarMenuMobile}></div>
      <style jsx>{styleBackdrop}</style>
    </>
  );
};
export default Backdrop;
