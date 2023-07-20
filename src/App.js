import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer"



function App() {
  const [page, setPage] = useState('')

  function pageNavigation() {
    if (page === 'portfolio') {
      return <Portfolio />
    }
    else if (page === 'contact') {
      return <Contact />
    }
    else if (page === 'resume') {
      return <Resume />
    }
    else {
      return <About />
    }
  }
  function navigate(currentPage) {
    setPage(currentPage)
  }
  return (
    <>
      <Header page={page} navigate={navigate} />
      <main>
        {pageNavigation()}
      </main>
      <Footer />
    </>
  );
}

export default App;
