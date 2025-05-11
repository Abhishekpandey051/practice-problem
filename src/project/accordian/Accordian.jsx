import { useState } from "react";
import "./accordian.css";
import { accordianData } from "./mockData";
const Accordion = () => {
    const [isOpen, setIsOpen] = useState(null);

    const toggleAccordion = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };
    return (
        <div className="accordion-container">
            <p className="head-container">Accordion</p>
            {accordianData.map((items, index) => (
                <div key={index}>
                    <div className="head-acc" onClick={() => toggleAccordion(index)}>
                        <h2>{items.title}</h2>
                        <span className="icon">{isOpen === index ? "⬆️" : "⬇️"}</span>
                    </div>
                    {isOpen === index && (
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
