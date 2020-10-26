import React from 'react';
import './App.css';
import { Router, Link, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { tint } from "polished";
import history from './history/history';
// import { createBrowserHistory } from "history";
import LandingPage from './landing/landingPage';
import Home from './view/home/home';

// const history = createBrowserHistory()

class App extends React.Component {
  getTheme = () => {
    const theme: any = {
      primaryColor: "#4276D9"
    };
    theme.primary90 = tint(0.9, theme.primaryColor);
    return theme;
  };
  render() {
    return (
    <div className="App">
      <ThemeProvider theme={this.getTheme()}>
        <Router history={history}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
        </Router>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
  }
}

export default App;
const GlobalStyle = createGlobalStyle`// styled
  html {
    height: 100%;
    body {
      height: 100%;
    }
  }`
