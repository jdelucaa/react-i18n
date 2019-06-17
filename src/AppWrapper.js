import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import frLocaleData from "react-intl/locale-data/fr";
import enLocaleData from "react-intl/locale-data/en";
import translations from "./i18n/locales";
import App from "./App";

addLocaleData(frLocaleData);
addLocaleData(enLocaleData);

class AppWrapper extends Component {
  render() {
    // get locale from url
    const locale = window.location.search.replace("?locale=", "") || "en";
    const messages = translations[locale];
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App />
      </IntlProvider>
    );
  }
}

export default AppWrapper;
