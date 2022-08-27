import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    document.title = `Contact Us - AniFlix`;
  }, []);
  return (
    <section className="w-1/2 mx-auto">
      <ContactForm />
    </section>
  );
};

export default Contact;
