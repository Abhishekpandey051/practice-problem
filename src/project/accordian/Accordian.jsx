import { useState } from "react";
import "./accordian.css";
const Accordion = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <div className="accordion-container">
            <p className="head-container">Accordion</p>
            {item.map((items, index) => (
            <div key={index}>
                <div className="head-acc" onClick={toggleAccordion}>
                    <h2>{items.title}</h2>
                    <span className="icon">{isOpen ? "⬆️" : "⬇️"}</span>
                </div>
                {isOpen && (
                    <div className="head-acc1">
                        <p>
                           {items.content}
                        </p>
                    </div>
                )}
            </div>
           ))}
        </div>
    );
};

export default Accordion;
