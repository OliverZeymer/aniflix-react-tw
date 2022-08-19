import Accordion from "./FooterAccordion";

const accordionData = [
  {
    heading: "Navigation",
    content:
      "Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
    href: "/contact",
  },
  {
    heading: "Can I upgrade my license?",
    content:
      "Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
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
    <footer className="w-full bg-primary-background text-primary-text py-12 mt-24 transition-all grid auto-cols-1fr ">
      <p>&copy; {new Date().getFullYear()}</p>
      <ul className="accordion">
        {accordionData.map(({ heading, content, href }) => (
          <Accordion
            key={heading}
            heading={heading}
            content={content}
            href={href}
          />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
