import Service from "../components/Service";

const services = [
  {
    title: "High Performance",
    text: "AniFlix is built on top of the React framework, which means we use the latest technologies to ensure that our website is fast and responsive.",
    img: "./assets/img/react.svg",
  },
  {
    title: "High Server Capacity",
    text: "AniFlix uses high quality servers with high capacity and the least amount of maintenance",
    img: "./assets/img/server.png",
  },
  {
    title: "Newest arrivals",
    text: "AniFlix always has the newest released episodes & seasons of your favorite anime shows",
    img: "./assets/img/aot.png",
  },
  {
    title: "Active community",
    text: "Our community is active and welcoming with over 10,000 memebers already",
    img: "./assets/img/community.png",
  },
  {
    title: "MyAnimeList Imports",
    text: "Import your MyAnimeList watch list to your AniFlix account to keep track of your anime",
    img: "./assets/img/mal_white.png",
  },
  {
    title: "Family Subscriptions",
    text: "AniFlix now has a family subscription feature, pay a lower price and link up to 5 accounts",
    img: "./assets/img/family.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-24 sm:grid sm:grid-cols-3 sm:auto-rows1fr sm:gap-y-24 my-20">
      <h2 className="mb-0 text-5xl pt-4 text-primary-text font-bold capitalize col-start-1 col-end-4 mt-12 text-center">
        The services we provide:
      </h2>
      {services.map((service, index) => {
        return <Service key={service.title} {...service} />;
      })}
    </section>
  );
};

export default ServicesSection;
