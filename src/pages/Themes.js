import { setToLS } from "../functions/setToLS";
import { setColors } from "../functions/setColors";
const Themes = () => {
  return (
    <section className="flex flex-col gap-14 h-fit my-20">
      <article className="flex flex-col sm:flex-row justify-between pb-16 border-b-2 border-[#334b2f]">
        <h2 className="heading text-[#42693b]">Default Theme:</h2>
        <button
          onClick={() => {
            setColors("", "");
            setToLS("theme", { primaryColor: "", textColor: "" });
          }}
          className="button bg-[#334b2f]  border-[#334b2f]"
        >
          Enable
        </button>
      </article>
      <article className="flex flex-col sm:flex-row justify-between pb-16 border-b-2 border-blue-500">
        <h2 className="heading text-[#3494d4]">Blue Theme:</h2>
        <button
          onClick={() => {
            setColors("blue", "#3494d4");
            setToLS("theme", { primaryColor: "blue", textColor: "#3494d4" });
          }}
          className="button bg-blue-500 border-blue-500 hover:text-[#3494d4]"
        >
          Enable
        </button>
      </article>
      <article className="flex flex-col sm:flex-row justify-between pb-16 border-b-2 border-red-500">
        <h2 className="heading text-[#cf2424]">Red Theme:</h2>
        <button
          onClick={() => {
            setColors("red", "#cf2424");
            setToLS("theme", { primaryColor: "red", textColor: "#cf2424" });
          }}
          className="button bg-red-500 border-red-500 hover:text-[#cf2424]"
        >
          Enable
        </button>
      </article>
      <article className="flex flex-col sm:flex-row justify-between pb-16 border-b-2 border-[#afafaf]">
        <h2 className="heading text-white">Light Theme:</h2>
        <button
          onClick={() => {
            setColors("#afafaf", "white");
            setToLS("theme", { primaryColor: "#afafaf", textColor: "white" });
          }}
          className="button bg-[#afafaf] border-[#afafaf] hover:text-white"
        >
          Enable
        </button>
      </article>
    </section>
  );
};

export default Themes;
