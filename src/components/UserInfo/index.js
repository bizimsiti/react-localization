import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
const User = styled.div`
  position: absolute;
  z-index: 2;
  top: 240px;
  right: 0;
  flex-direction: column;
  width: 100%;
  border: 1px solid #aaa;
  padding: 20px;
  .buttonGroup {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin: 20px auto;
  }
  button {
    width: 100px;
    border: 1px solid #716af3;
    border-radius: 15px;
    outline: none;
    background-color: #716af3;

    font-size: 20px;
    &:hover {
      background-color: #fff;
      color: #716af3;
      cursor: pointer;
    }
  }
  @media (min-width: 576px) {
    width: 300px;
    top: 110px;
    right: 75px;
  }
`;

function UserInfo({ visible, setVisible }) {
  const { login, setLogin } = useContext(LoginContext);
  const toggleClose = () => {
    setVisible(!visible);
  };
  const handleLogout = () => {
    setLogin({});
  };
  return (
    <User style={{ display: visible ? "flex" : "none" }}>
      <div className="username">
        <p>
          <b>Username :</b> {login.username}
        </p>
      </div>
      <div className="email">
        <p>
          <b>Email :</b>
          {login.email}
        </p>
      </div>
      <div className="buttonGroup">
        <button onClick={toggleClose}>Close</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </User>
  );
}

export default UserInfo;
