import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { LoginProvider } from "./contexts/LoginContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messages from "./localization/messages";
const hasLocale = localStorage.getItem("lang");
const defaultLang = hasLocale ? hasLocale : navigator.language;
console.log(defaultLang);
function App() {
  const [lang, setLang] = useState(defaultLang);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LoginProvider>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Router>
          <div className="container">
            <NavBar lang={lang} setLang={setLang} />
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </IntlProvider>
    </LoginProvider>
  );
}

export default App;
