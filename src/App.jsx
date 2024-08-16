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
  const [isChecked, setIsChecked] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [location, setLocation] = useLocation();
  console.log(location);
  return (
    <div className="max-w-[50rem] m-auto px-6 bg-animated ">
      <div className="absolute top-5 right-5">
        <label className="relative inline-flex cursor-pointer items-center">
          <input id="switch-2" type="checkbox" className="peer sr-only" />
          <label htmlFor="switch-2" className="hidden"></label>
          <div className="peer h-4 w-11 rounded-full  bg-[rgba(0,0,0,0.4)] after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full  after:bg-white after:transition-all after:content-[''] peer-checked:bg-[hsla(0, 100%, 50%, 0.1)] peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
        </label>
      </div>
      {/* <nav>
        <Navbar />
      </nav> */}
      <main className="z-50">
        <br />
        <br />
        <Home />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <Experiences />
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
