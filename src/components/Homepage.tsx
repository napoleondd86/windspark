import Hero from "./Hero";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout (() => element.scrollIntoView({behavior: 'smooth'}), 0)
      }
    }
  }, [location])
}


const Homepage = () => {

  useScrollToHash();
  return (
    <>
      <Hero />
        
    </>
  )
}

export default Homepage
