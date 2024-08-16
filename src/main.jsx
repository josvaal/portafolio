import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function InteractiveComponent() {
  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const interBubble = document.querySelector("#interactive");

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY + window.scrollY)}px)`;
      requestAnimationFrame(move);
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move(); // Iniciar el movimiento

    return () => {
      window.removeEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
    };
  }, []);

  return <div id="interactive"></div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      className="bg-dark min-h-screen w-full text-white z-10 py-16 bg-custom-gradient"
      id="wrapper"
    >
      <div className="lg:block hidden">
        <InteractiveComponent />
      </div>
      <App />
    </div>
  </React.StrictMode>
);
