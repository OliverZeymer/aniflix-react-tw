const ModalButton = ({
  show,
  setShow,
  btnValue,
  color,
  setModal,
  preview,
  text,
  width,
  mx,
  mt,
}) => {
  return (
    <>
      <button
        className={`button w-fit bg-${color} ${width} mx-${mx} mt-${mt} border-${color} hover:text-${text} `}
        onClick={function () {
          setShow(!show);
          {
            preview && setModal(preview);
          }
        }}
      >
        {btnValue}
      </button>
    </>
  );
};

export default ModalButton;
