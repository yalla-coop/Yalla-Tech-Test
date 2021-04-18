import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Pages from './pages';
import theme, { globalStyle } from './theme';
import { Route } from './components';

import './App.css';
import 'antd/dist/antd.css';
import { navRoutes } from './constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
    setIsMounted(true);
  }, []);

  return (
    <div className="app">
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              isLoggedIn={isLoggedIn}
              isMounted={isMounted}
              Component={Pages.Example}
              layout="home"
            />
            <Route
              exact
              path={navRoutes.KATAS}
              isLoggedIn={isLoggedIn}
              isMounted={isMounted}
              Component={Pages.Katas}
              layout="general"
            />
            <Route
              exact
              path={navRoutes.KATA}
              isLoggedIn={isLoggedIn}
              isMounted={isMounted}
              Component={Pages.Kata}
              layout="general"
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
