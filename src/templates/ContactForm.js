import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SuccessAnimation from "../components/SuccessAnimation";
import { useState } from "react";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const mailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("You have to write an email")
    .matches(mailRegExp, "Email is not valid"),
  phone: yup
    .string()
    .required("You have to write a phone number")
    .matches(phoneRegExp, "Phone number is not valid"),
  firstname: yup.string().required("You have to write a first name"),
  lastname: yup.string().required("You have to write a last name"),
  textarea: yup.string().required("You have to write a message"),
});

const ContactForm = () => {
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log(data);
    setIsSuccessfullySubmitted(true);
    setTimeout(() => {
      reset();
      setIsSuccessfullySubmitted(false);
    }, 3000);
  };

  return (
    <>
      {isSuccessfullySubmitted && <SuccessAnimation />}
      <h2 className="heading text-center my-12">Contact us</h2>
      <form
        noValidate
        className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:auto-rows-1fr sm:gap-8"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="relative">
          <input
            className={errors.firstname ? "input shake" : "input"}
            {...register("firstname")}
            type="text"
            placeholder="First name"
            autoComplete="off"
          />
          <p className="absolute text-red-500">{errors.firstname?.message}</p>
        </div>
        <div>
          <input
            className={errors.lastname ? "input shake" : "input"}
            {...register("lastname")}
            type="text"
            placeholder="Last name"
            autoComplete="off"
          />
          <p className="absolute text-red-500">{errors.lastname?.message}</p>
        </div>
        <div>
          <input
            className={errors.email ? "input shake" : "input"}
            {...register("email")}
            placeholder="Email"
            type="email"
            autoComplete="off"
          />
          <p className="absolute text-red-500">{errors.email?.message}</p>
        </div>
        <div>
          <input
            className={errors.phone ? "input shake" : "input"}
            {...register("phone")}
            type="tel"
            placeholder="Phone number"
            autoComplete="off"
            aria-label="Phone number input"
          />
          <p className="absolute text-red-500">{errors.phone?.message}</p>
        </div>
        <div className="col-start-1 col-end-3">
          <textarea
            className={
              errors.textarea
                ? "input shake resize-none h-72"
                : "input resize-none h-72"
            }
            {...register("textarea")}
            placeholder="Your message"
          />
          <p className="absolute text-red-500">{errors.textarea?.message}</p>
        </div>
        <div className=" col-start-1 col-end-3">
          <button
            type="submit"
            aria-label="submit form button"
            spellCheck="false"
            className="button bg-primary-color sm:w-1/3 mx-auto justify-center"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
