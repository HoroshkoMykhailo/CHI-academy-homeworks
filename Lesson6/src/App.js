import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Heroes, About, NotFound } from './layouts/layouts';
import { Hero } from './components/hero/hero';

const App = () => {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/heroes" element={<Heroes/>}>
          <Route path=":id" element={<Hero hero={{ name: "Spiderman"}}/>} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  </>;
};

export default App;