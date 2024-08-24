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
  const [location, setLocation] = useLocation();
  console.log(location);
  return (
    <div className="max-w-[60rem] m-auto px-6 bg-animated transition-all">
      {/* <nav>
        <Navbar />
      </nav> */}
      <main>
        <br />
        <br />
        <Home />
        <br />
        <br />
        <Experiences />
        <br />
        <br />
        <Projects />
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
