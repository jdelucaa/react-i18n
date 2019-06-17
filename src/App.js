import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  link: {
    id: "app.link",
    defaultMessage: "Learn React"
  },
  content1: {
    id: "app.content1",
    defaultMessage: "Edit"
  },
  content2: {
    id: "app.content2",
    defaultMessage: "and save to reload."
  }
});

function App(props) {
  const {
    intl: { formatMessage }
  } = props;
  return (
    <div className="App">
      <header className="App-header">
        <div className="languages">
          <a href="/?locale=en">English</a>
          <a href="/?locale=fr">Français</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {formatMessage(messages.content1)} <code>src/App.js</code>{" "}
          {formatMessage(messages.content2)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {formatMessage(messages.link)}
        </a>
      </header>
    </div>
  );
}

export default injectIntl(App);
