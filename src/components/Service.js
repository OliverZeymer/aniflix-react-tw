const Service = (props) => {
  return (
    <article className="flex flex-col items-center gap-4">
      <img className="max-h-44" src={props.img} alt="Service Image" />
      <h2 className="text-primary-text font-bold text-2xl">{props.title}</h2>
      <p className="font-bold opacity-70 text-center w-4/5">{props.text}</p>
    </article>
  );
};

export default Service;
