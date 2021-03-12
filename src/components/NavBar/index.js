import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Login from "../Login";
import LoginContext from "../../contexts/LoginContext";
import { FormattedMessage } from "react-intl";
const Nav = styled.nav`
  display: flex;
  width: 100%;
  margin: 50px 0px;
  height: 50px;
  justify-content: space-between;
  border: 1px solid #aaa;

  .leftSide {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .home {
    margin: 0 20px;
  }
  a {
    text-decoration: none;
    color: #716af3;
    &:hover {
      color: #48475a;
    }
  }
  .rightSide {
    display: none;
    flex-direction: row;
    align-items: center;
  }
  .menuItems {
    list-style: none;
    display: flex;
  }
  .menuItems > li a {
    margin: 0 20px;
  }
  .menuItems li:nth-of-type(3) a {
    display: inline-block;
    border: 1px solid #716af3;
    background-color: #716af3;
    border-radius: 15px;
    width: 100px;
    padding: 0;
    margin: 0;
    text-align: center;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #716af3;
    }
  }
  select {
    width: 50px;
    appearance: none;
    text-align: center;
    margin: 0 20px;
    outline: none;
    border: 1px solid #716af3;
    background-color: #716af3;
    color: #fff;
    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #716af3;
    }
  }
  .menuIcon {
    display: flex;
    text-decoration: none;
    margin-right: 20px;
  }
  .menuIcon button {
    border: none;
    background-color: transparent;
    color: #716af3;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }
  .mobileMenu {
    display: flex;
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 110px;
    left: 0;
    z-index: 3;

    ul {
      display: flex;
      flex-direction: column;
      background-color: #c4c3cc;
      text-align: center;
      border-radius: 10px;
      li {
        margin-bottom: 10px;
      }
    }
  }
  @media (min-width: 576px) {
    margin: 50px 0px;

    .menuIcon {
      display: none;
      align-items: center;
      margin-right: 20px;
    }
    .rightSide {
      display: flex;
    }
    .mobileMenu {
      display: none;
    }
  }
`;

//#48475a #716af3
function NavBar({ lang, setLang }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const { login } = useContext(LoginContext);

  const location = useLocation().pathname;
  const handleClick = (e) => {
    setVisible(!visible);
    e.preventDefault();
  };
  const handleLang = (e) => {
    setLang(e.target.value);
  };
  const currentPage = (location) => {
    switch (location) {
      case "/":
        return <FormattedMessage id="home" />;
      case "/contact":
        return <FormattedMessage id="contactUs" />;
      default:
        return "Home";
    }
  };
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Nav>
        <div className="leftSide">
          <div className="home">
            <Link to="/">
              <i className="fas fa-home fa-2x"></i>
            </Link>
          </div>
          <div className="currentPage">
            <p>{currentPage(location)}</p>
          </div>
        </div>
        <div className="rightSide">
          <ul className="menuItems">
            <li>
              <Link to="/contact">
                <FormattedMessage id="contactUs" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage id="home" />
              </Link>
            </li>
            <li>
              <a onClick={handleClick} href="/">
                {login.username ? (
                  login.username
                ) : (
                  <FormattedMessage id="login" />
                )}
              </a>
            </li>
            <li>
              <select
                name="languages"
                id="languages"
                onChange={handleLang}
                defaultValue={lang}
              >
                <option value="EN">EN</option>
                <option value="TR" selected>
                  TR
                </option>
              </select>
            </li>
          </ul>
        </div>
        <div className="menuIcon">
          <button onClick={toggleMenu}>
            <i className="fas fa-bars fa-2x"></i>
          </button>
        </div>
        {open && (
          <div className="mobileMenu">
            <ul className="menuItems">
              <li>
                <Link to="/contact">
                  <FormattedMessage id="contactUs" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FormattedMessage id="home" />
                </Link>
              </li>
              <li>
                <a onClick={handleClick} href="/">
                  {login.username ? (
                    login.username
                  ) : (
                    <FormattedMessage id="login" />
                  )}
                </a>
              </li>
              <li>
                <select
                  name="languages"
                  id="languages"
                  onChange={handleLang}
                  defaultValue={lang}
                >
                  <option value="EN">EN</option>
                  <option value="TR" selected>
                    TR
                  </option>
                </select>
              </li>
            </ul>
          </div>
        )}
        <Login visible={visible} setVisible={setVisible} />
      </Nav>
    </div>
  );
}

export default NavBar;
