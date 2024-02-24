import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { Route, Switch } from "wouter";
import Experiences from "./pages/Experiences";
import { Router } from "wouter";
import { useLocation } from "wouter";

const App = () => {
  const [location, setLocation] = useLocation();
  console.log(location);
  return (
    <div className="max-w-[45rem] m-auto px-6">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Router base="">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experiences} />
            <Route>
              {() => {
                console.log(location);
                setLocation("/");
              }}
            </Route>
            <Route path="*">
              {() => {
                console.log(location);
                setLocation("/");
              }}
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
