import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Heroes, About, NotFound } from './layouts/layouts';
import { Hero } from './components/hero/hero';
import Sidebar from './components/sidebarNav/sidebarNav';
import { sidebarWidth } from './constants/sidebarWidth';
import AppRoute from './constants/appRoutes';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar width={sidebarWidth} />
        <div className="app-container">
          <Routes>
            <Route path={AppRoute.HOME} element={<Home />} />
            <Route path={AppRoute.HEROES} element={<Heroes />}>
              <Route
                path={AppRoute.HERO}
                element={<Hero hero={{ name: "Spiderman" }} />}
              />
            </Route>
            <Route path={AppRoute.ABOUT} element={<About />} />
            <Route path={AppRoute.ANY} element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;