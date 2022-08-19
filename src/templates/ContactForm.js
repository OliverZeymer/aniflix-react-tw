import InputField from "../components/InputField";
import Textarea from "../components/Textarea";
const ContactForm = () => {
  return (
    <section>
      <h1 className="heading text-center mt-4 mb-8">Contact us</h1>
      <form className="grid grid-cols-2 gap-5">
        <InputField type="text" color="bg-white" label="First Name" />
        <InputField type="text" color="bg-white" label="Last Name Name" />
        <InputField type="email" color="bg-white" label="Email" />
        <InputField type="tel" color="bg-white" label="Phone" />
        <InputField type="text" span="col-start-1 col-end-3" color="bg-white" label="Address" />
        <Textarea color="bg-primary-textarea" span="col-start-1 col-end-3" label="Type your message here" />
        <button className="button bg-primary-color" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
