import React, {useState, useEffect} from "react";
import './BackToTopButton.css';
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton(){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 50){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={ScrollToTop}>
            <FaArrowUp />
        </div>
    );
}

export default BackToTopButton;