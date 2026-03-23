import React, { useState, useEffect, lazy, Suspense } from 'react';
// components
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Loader from './components/Loader/Loader';

const About = lazy(() => import('./components/About/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Contact = lazy(() => import('./components/Contact/Contact'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep loader brief to avoid harming first-contentful paint.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Banner />
          <Nav />
          <Suspense fallback={<div className="text-center py-8 text-slate-300">Loading sections...</div>}>
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default App;
