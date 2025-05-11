import "../../App.css"
import { useEffect, useState } from "react";

function Trafic() {
  const [activecolor, setActiveColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColor((prev) => (prev + 1) % 5);
    }, 3000);
    console.log(interval);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container">
        <div className="msg">
          <div className={activecolor === 0 ? "inners" : "inners1"}></div>
          <h1>
            {activecolor === 0
              ? "Stop..!!  wait for 30 second"
              : "Please Go.. !!"}
          </h1>
        </div>
        <div className="msg">
          <div className={activecolor === 1 ? "inners" : "inners1"}></div>
          <h1>
            {activecolor === 1
              ? "Stop..!! wait for 30 second"
              : "Please Go.. !!"}
          </h1>
        </div>
        <div className="msg">
          <div className={activecolor === 2 ? "inners" : "inners1"}></div>
          <h1>
            {activecolor === 2
              ? "Stop..!! wait for 30 second"
              : "Please Go.. !!"}
          </h1>
        </div>
        <div className="msg">
          <div className={activecolor === 3 ? "inners" : "inners1"}></div>
          <h1>
            {activecolor === 3
              ? "Stop..!! wait for 30 second"
              : "Please Go.. !!"}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Trafic;
