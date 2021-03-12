import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
import { useFormik } from "formik";
import validations from "./validations";
import { countryList } from "./countries";
import { FormattedMessage } from "react-intl";
function Contact() {
  const { login, setLogin } = useContext(LoginContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      text: ""
    },
    validationSchema: validations,
    onSubmit: (values, bag) => {
      console.log(values);
      bag.resetForm();
    }
  });
  return (
    <ContactForm>
      <form action="/" className="loginForm" onSubmit={formik.handleSubmit}>
        <div className="header">
          <h1>
            <FormattedMessage id="contactUs.title" />
          </h1>
        </div>
        <div className="inputContainer">
          <label htmlFor="name">
            <b>
              <FormattedMessage id="contactUs.title" />
            </b>
          </label>
          <FormattedMessage id="username.placeholder">
            {(placeholder) => (
              <input
                id="name"
                type="text"
                placeholder={placeholder}
                name="name"
                required
                value={login.username ? login.username : formik.values.username}
                onChange={formik.handleChange}
              />
            )}
          </FormattedMessage>

          <label htmlFor="email">
            <b>E-mail</b>
          </label>
          <FormattedMessage id="email.placeholder">
            {(placeholder) => (
              <input
                type="email"
                placeholder={placeholder}
                id="email"
                name="email"
                required
                value={login.email ? login.email : formik.values.username}
                onChange={formik.handleChange}
              />
            )}
          </FormattedMessage>

          <label htmlFor="phone">
            <b>
              <FormattedMessage id="contactUs.phone" />
            </b>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="0555555555"
            name="phone"
            pattern="[0-9]{11}"
            required
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          <label htmlFor="country">
            <b>
              <FormattedMessage id="contactUs.country" />
            </b>
          </label>
          <select name="country" id="country">
            {countryList.map((country, i) => (
              <option key={i} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <label htmlFor="text">
            <b>
              <FormattedMessage id="contactUs.message" />
            </b>
          </label>
          <textarea
            id="text"
            name="text"
            value={formik.values.text}
            onChange={formik.handleChange}
          ></textarea>
          <div className="btnGroup">
            <button type="submit">
              <FormattedMessage id="contactUs.send" />
            </button>
          </div>
        </div>
      </form>
    </ContactForm>
  );
}

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  .header {
    margin-bottom: 20px;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 10px;
  }
  input,
  select,
  textarea {
    width: 70%;
    margin: 0 auto;
    outline: none;
    border: none;
    background-color: #716af3;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 5px;
  }
  textarea {
    width: 300px;
    height: 150px;
    resize: none;
    column-gap: 50;
  }
  button {
    border: none;
    width: 100px;
    margin: 20px;
    background-color: #716af3;
    font-size: 20px;
    color: #fff;
    border: 1px solid #716af3;
    border-radius: 15px;
    &:hover {
      background-color: #fff;
      color: #716af3;
      cursor: pointer;
      border: 1px solid #716af3;
    }
  }
  @media (min-width: 576px) {
    width: 500px;
  }
`;
export default Contact;
