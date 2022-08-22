import Accordion from "./Accordion";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const accordionData = [
  {
    heading: "Navigation",
    content: ["Home", "About", "Contact"],
  },
  {
    heading: "Terms & Privacy",
    content: ["Content", "More Content"],
  },
  {
    heading: "List of credits",
    content: ["Github", "React"],
    href: "/contact",
  },
];
const Footer = () => {
  return (
    <footer className="bg-black px-12 w-full bg-primary-background text-primary-text py-12 mt-24 transition-all">
      <div className="flex gap-4">
        <a className="transition-all hover:scale-125" href="https://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a className="transition-all hover:scale-125" href="https://youtube.com" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a className="transition-all hover:scale-125" href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a className="transition-all hover:scale-125" href="https://github.com" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <ul className="select-none flex flex-col">
        {accordionData.map(({ heading, content }) => (
          <Accordion key={heading} heading={heading} content={content} />
        ))}
      </ul>
      <p className="mt-16">AniFlix &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
