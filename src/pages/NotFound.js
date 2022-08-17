const NotFound = () => {
  return (
    <div className="container mx-auto flex items-center">
      <div className="w-full flex flex-col items-center ">
        <h2 className="font-extrabold text-7xl text-center text-primary-text leading-tight mt-4">
          Page not found :(
        </h2>

        <p className="font-extrabold text-7xl my-8 text-primary-text">404</p>
        <img src="./assets/img/sad-naruto.png" className="w-1/3" />
      </div>
    </div>
  );
};

export default NotFound;
