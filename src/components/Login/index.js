import styled from "styled-components";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
import { useFormik } from "formik";
import validations from "./validations";
import UserInfo from "../UserInfo";
import { FormattedMessage } from "react-intl";
function Login({ visible, setVisible }) {
  const { login, setLogin } = useContext(LoginContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: ""
    },
    validationSchema: validations,
    onSubmit: (values, bag) => {
      setLogin(values);
      bag.resetForm();
      setVisible(!visible);
    }
  });
  const toggleClose = () => {
    setVisible(!visible);
  };

  return (
    <>
      {login.username ? (
        <UserInfo visible={visible} setVisible={setVisible}></UserInfo>
      ) : (
        <LoginForm style={{ display: visible ? "flex" : "none" }}>
          <form action="/" className="loginForm" onSubmit={formik.handleSubmit}>
            <div className="header">
              <div className="avatar">
                <i className="fas fa-user-tie fa-7x"></i>
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="username">
                <b>
                  <FormattedMessage id="userName" />
                </b>
              </label>
              <FormattedMessage id="username.placeholder">
                {(placeholder) => (
                  <input
                    id="username"
                    type="text"
                    placeholder={placeholder}
                    name="username"
                    required
                    value={formik.values.username}
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
                    id="email"
                    type="email"
                    placeholder={placeholder}
                    name="email"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                )}
              </FormattedMessage>

              <label htmlFor="password">
                <b>
                  <FormattedMessage id="password" />
                </b>
              </label>
              <FormattedMessage id="password.placeholder">
                {(placeholder) => (
                  <input
                    id="password"
                    name="password"
                    placeholder={placeholder}
                    type="password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    disabled={formik.isSubmitting}
                  />
                )}
              </FormattedMessage>

              <div className="btnGroup">
                <button type="submit" disabled={formik.isSubmitting}>
                  <FormattedMessage id="login" />
                </button>
                <button
                  onClick={toggleClose}
                  type="button"
                  className="cancelButton"
                >
                  <FormattedMessage id="close" />
                </button>
              </div>
            </div>
          </form>
        </LoginForm>
      )}
    </>
  );
}

const LoginForm = styled.div`
  position: absolute;
  z-index: 2;
  top: 230px;
  right: 0;
  flex-direction: column;
  width: 100%;
  border: 1px solid #aaa;
  background-color: #c4c3cc;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .avatar {
    margin: 20px auto;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  label {
    margin: 10px;
  }
  input {
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
  .btnGroup {
    display: flex;
    min-width: 300px;
    margin: 20px auto;
    padding: 20px;
    justify-content: space-between;
  }
  button {
    border: none;
    width: 100px;
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
    width: 300px;
    top: 110px;
    right: 75px;
  }
`;

export default Login;
