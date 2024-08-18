import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { Route, Switch } from "wouter";
import Experiences from "./pages/Experiences";
import { Router } from "wouter";
import { useLocation } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from "react";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isChecked, setIsChecked] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleLanguageChange = () => {
    setIsLanguage(!isLanguage);
  };

  const [location, setLocation] = useLocation();
  console.log(location);
  return (
    <div className="max-w-[50rem] m-auto px-6 bg-animated transition-all">
      <div className="absolute top-5 right-5 flex md:flex-col md:gap-2 gap-4">
        <div className="flex gap-2 justify-between items-center">
          <div>
            <p className="font-bold text-xl">
              {isLanguage ? "Español" : "English"}
            </p>
          </div>
          <div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                id="switch-2"
                type="checkbox"
                className="peer sr-only"
                value={isLanguage}
                onChange={handleLanguageChange}
              />
              <label htmlFor="switch-2" className="hidden"></label>
              <div className="peer h-4 w-11 rounded-full  bg-[rgba(0,0,0,0.2)] after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full  after:bg-[rgba(255,255,255,0.8)] after:transition-all after:content-[''] peer-checked:bg-[rgba(30,0,0,0.75)] peer-checked:after:translate-x-full "></div>
            </label>
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center">
          <div>
            <p className="font-bold text-xl">{isChecked ? "ab" : "Ab"}</p>
          </div>
          <div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                id="switch-2"
                type="checkbox"
                className="peer sr-only"
                value={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="switch-2" className="hidden"></label>
              <div className="peer h-4 w-11 rounded-full  bg-[rgba(0,0,0,0.2)] after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full  after:bg-[rgba(255,255,255,0.8)] after:transition-all after:content-[''] peer-checked:bg-[rgba(30,0,0,0.75)] peer-checked:after:translate-x-full "></div>
            </label>
          </div>
        </div>
      </div>
      {/* <nav>
        <Navbar />
      </nav> */}
      <main className={`z-50 ${isChecked ? "lowercase" : ""}`}>
        <br />
        <br />
        <Home isEnglish={isLanguage} />
        <br />
        <br />
        <Experiences isEnglish={isLanguage} />
        <br />
        <br />
        <Projects isEnglish={isLanguage} />
        <Router base="">
          <Switch>
            {/* <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experiences} /> */}
            {/* <Route>
              {() => {
                console.log(location);
                setLocation("/");
              }}
            </Route> */}
            <Route path="*">
              {() => {
                console.log(location);
                setLocation("/");
              }}
            </Route>
          </Switch>
        </Router>
        <Analytics />
        <SpeedInsights />
      </main>
      <Footer />

      <br />
      <br />
    </div>
  );
};

export default App;
