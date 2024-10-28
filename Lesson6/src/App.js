import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Heroes, About, NotFound } from './layouts/layouts';
import { Hero, Sidebar } from './components/components';
import { AppRoute } from './constants/constants';
import { ThemeContextProvider } from './providers/themeProvider';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <Sidebar />
        <div className="app-container">
          <Routes>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={AppRoute.HEROES} element={<Heroes />}>
              <Route
                path={AppRoute.HERO}
                element={<Hero/>}
              />
            </Route>
            <Route path={AppRoute.ABOUT} element={<About />} />
            <Route path={AppRoute.ANY} element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;