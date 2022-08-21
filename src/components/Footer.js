import Accordion from "./Accordion";

const accordionData = [
  {
    heading: "Navigation",
    content: "Content",
    href: "/contact",
  },
  {
    heading: "Can I upgrade my license?",
    content: "Content",
    href: "/theme",
  },
  {
    heading: "Do you provide email support if I need help?",
    content: "contact",
    href: "/contact",
  },
];
const Footer = () => {
  return (
    <footer className=" px-12 w-full bg-primary-background text-primary-text py-12 mt-24 transition-all flex flex-col gap-6 justify-between">
      <ul className="select-none cursor-pointer accordion flex justify-between w-full">
        {accordionData.map(({ heading, content, href }) => (
          <Accordion
            key={heading}
            heading={heading}
            content={content}
            href={href}
          />
        ))}
      </ul>
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
