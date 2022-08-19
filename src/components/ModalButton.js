const ModalButton = ({
  show,
  setShow,
  btnValue,
  color,
  setModal,
  preview,
  text,
}) => {
  return (
    <>
      <button
        className={`button w-48 bg-${color} border-${color} hover:text-${text} `}
        onClick={function () {
          setShow(!show);
          setModal(preview);
        }}
      >
        {btnValue}
      </button>
    </>
  );
};

export default ModalButton;
