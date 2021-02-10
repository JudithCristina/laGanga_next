const Backdrop = (props) => {

    console.log("aqui estoy");
  return (
    <>
      <div className="backdrop" onClick={props.ocultarMenuMobile}>

      </div>
      <style jsx>
        {`
          .backdrop {
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 100;
            top: 0;
            left: 0;
          }
        `}
      </style>
    </>
  );
};
export default Backdrop;
